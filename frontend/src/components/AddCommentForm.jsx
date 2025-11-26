import { useState } from 'react';
import useUser from '../useUser';

export default function AddCommentForm({ onAddComment }) {
    const [nameText, setNameText] = useState('');
    const [commentText, setCommentText] = useState('');

    return (
        <div className="card mb-4 shadow-sm border-0 rounded-4 my-4">
            <div className="card-body p-4">
                <h4 className="fw-bold mb-4">Add a Comment</h4>
                <form onSubmit={onAddComment}>

                    <div className="mb-4">
                        <input placeholder="Name" className="form-control form-control-lg rounded-3 mb-3" type="text" value={nameText} onChange={e => setNameText(e.target.value)} />
                        <textarea
                            className="form-control form-control-lg rounded-3"
                            rows="3"
                            value={commentText}
                            onChange={(e) => setCommentText(e.target.value)}
                            placeholder="Write your thoughts..."
                            required
                        />
                    </div>

                    <button
                        className="btn btn-primary px-4 py-2 fw-semibold rounded-3"
                        onClick={() => {
                            onAddComment({ nameText, commentText });
                            setNameText('');
                            setCommentText('');
                        }}>
                        Submit Comment
                    </button>
                </form>
            </div>

        </div>
    )
}