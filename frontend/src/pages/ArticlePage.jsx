import { useState, useEffect } from 'react';
import { useParams, useLoaderData } from 'react-router-dom';
import axios from 'axios';
import CommentsList from '../components/CommentsList';
import AddCommentForm from '../components/AddCommentForm';
import articles from "../article-content";
import useUser from '../useUser';

export default function ArticlePage() {
    const params = useParams();
    const name = params.name;

    const { upvotes: initialUpvotes, comments: initialComments, upvoteIds: initialUpvoteIds } = useLoaderData();
    const [upvotes, setUpvotes] = useState(initialUpvotes);
    const [comments, setComments] = useState(initialComments);
    const [upvoteIds, setUpvoteIds] = useState(initialUpvoteIds || []);

    const { isLoading, user } = useUser();

    const article = articles.find(a => a.name === name);

    const hasUserUpvoted = user && upvoteIds.includes(user.uid);

    async function onUpvoteClicked() {
        if (hasUserUpvoted)
            return;

        const token = user && await user.getIdToken();
        const headers = token ? { authtoken: token } : {};
        const response = await axios.post('/api/articles/' + name + '/upvote', null, { headers });
        const updatedArticleData = response.data;
        setUpvotes(updatedArticleData.upvotes);
        setUpvoteIds(updatedArticleData.upvoteIds);
    }

    async function onAddComment({ nameText, commentText }) {
        const token = user && await user.getIdToken();
        const headers = token ? { authtoken: token } : {};
        const response = await axios.post('/api/articles/' + name + '/comments', {
            postedBy: nameText,
            text: commentText,
        }, { headers });
        const updatedArticleData = response.data;
        setComments(updatedArticleData.comments);
    }

    return (
        <>
            <div className="container py-5" >
                <h1 className="mb-4">{article.title}</h1>
                <div className="mb-3 d-flex align-items-center gap-3">
                    {user && (
                        <div className="d-flex align-items-center gap-3 my-3">
                            <button className="btn btn-outline-primary" onClick={onUpvoteClicked} disabled={hasUserUpvoted} >
                                👍 {upvotes} Upvotes
                            </button>
                        </div>
                    )}
                </div>

                <div className="mb-5">
                    {article.content.map((p, idx) => (
                        <p key={idx} className="fs-5 lh-lg">
                            {p}
                        </p>
                    ))}
                </div>
                {user
                    ? <AddCommentForm onAddComment={onAddComment} />
                    : (<div className="alert alert-info mt-4">
                        <strong>Log in</strong> to upvote or add a comment.
                    </div>)}
                <CommentsList comments={comments} />
            </div>



        </>
    );
}

export async function loader({ params }) {
    const response = await axios.get('/api/articles/' + params.name);
    const { upvotes, comments, upvoteIds } = response.data;
    return { upvotes, comments, upvoteIds };
}