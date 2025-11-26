export default function AboutPage() {
    return (
        <div className="container py-5">

            <section className="hero-section text-center py-5 px-3 mb-5">
                <h1 className="fw-bold mb-3">About InsightHub</h1>
                <p className="lead mb-4 mx-auto" style={{ maxWidth: "750px" }}>
                    InsightHub was built to be a peaceful digital space where ideas can grow.
                    Whether you're here to learn, write, or simply explore — this is your home
                    for thoughtful content and meaningful conversations.
                </p>
            </section>

            <section className="row text-center g-4 mb-5">
                <div className="col-md-4">
                    <div className="p-4 h-100 bg-white rounded shadow-sm">
                        <h5 className="fw-bold text-primary mb-3">Our Purpose</h5>
                        <p>
                            To connect curious minds through well-crafted articles and authentic discussions.
                        </p>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="p-4 h-100 bg-white rounded shadow-sm">
                        <h5 className="fw-bold text-primary mb-3">Our Vision</h5>
                        <p>
                            To create a calm, uplifting space that encourages creativity,
                            learning, and open expression.
                        </p>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="p-4 h-100 bg-white rounded shadow-sm">
                        <h5 className="fw-bold text-primary mb-3">Our Community</h5>
                        <p>
                            Writers, readers, learners, and thinkers — all coming together to share ideas.
                        </p>
                    </div>
                </div>
            </section>

            <section className="text-center py-4 mb-5">
                <h2 className="fw-bold mb-3">Our Story</h2>
                <p className="mx-auto text-muted mb-4" style={{ maxWidth: "750px" }}>
                    InsightHub started as a simple idea: create a friendly space online
                    where people can read meaningful articles and engage in thoughtful conversations.
                    Over time, it has grown into a community of passionate readers and inspiring writers.
                </p>
                <img
                    src="https://picsum.photos/900/300?random=65"
                    alt="InsightHub Story"
                    className="img-fluid rounded shadow-sm"
                />
            </section>

            <section className="join-section text-center p-5 rounded shadow-sm mb-5">
                <h2 className="fw-bold mb-3">Join Us</h2>
                <p className="lead text-muted mb-4">
                    Whether you're a writer wanting to share your ideas or a reader seeking inspiration,
                    you're welcome here.
                </p>
                <a href="/create-account" className="btn btn-primary btn-lg px-4">
                    Create an Account
                </a>
            </section>

            <footer className="text-center text-muted py-4 mt-5 border-top small">
                © {new Date().getFullYear()} InsightHub — Built with passion for learning and creativity.
            </footer>
        </div>
    );
}