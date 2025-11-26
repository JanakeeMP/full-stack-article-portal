export default function CommentsList({ comments }) {
    return (
        <>
            <div className="mb-4">
                <h4 className="mb-3">Comments</h4>

                {comments.length === 0 && (
                    <p className="text-muted">No comments yet. Be the first!</p>
                )}

                {comments.map(comment => (
                    <div key={comment.text} className="card mb-3 shadow-sm">
                        <div className="card-body">
                            <h6 className="fw-bold mb-1">{comment.postedBy}</h6>
                            <p className="mb-0">{comment.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}