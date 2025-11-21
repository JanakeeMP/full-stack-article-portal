import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <div className="container py-5">
            <section className="hero-section text-center py-5 px-3 mb-5">
                <h1 className="fw-bold mb-3">Welcome to InsightHub</h1>
                <p className="lead mb-4">
                    A community where ideas spark discussion — read, share, and engage
                    with thoughtful articles.
                </p>
                <Link to="/articles" className="btn btn-primary btn-lg px-4 fw-semibold shadow-sm">
                    Browse Articles
                </Link>
            </section>

            <section className="row text-center g-4 mb-5">
                <div className="col-md-4">
                    <div className="p-4 h-100 bg-white rounded shadow-sm">
                        <h5 className="fw-bold text-primary mb-3">Read Quality Articles</h5>
                        <p>Discover topics ranging from technology to personal growth.</p>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="p-4 h-100 bg-white rounded shadow-sm">
                        <h5 className="fw-bold text-primary mb-3">Share Your Voice</h5>
                        <p>Write and publish your own articles to inspire others.</p>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="p-4 h-100 bg-white rounded shadow-sm">
                        <h5 className="fw-bold text-primary mb-3">Engage with Others</h5>
                        <p>Comment, connect, and enjoy thoughtful conversations.</p>
                    </div>
                </div>
            </section>

            <section className="text-center py-4 mb-5">
                <h2 className="fw-bold mb-3">Why InsightHub?</h2>
                <p className="mx-auto text-muted mb-4" style={{ maxWidth: "700px" }}>
                    In a world full of noise, we built InsightHub to create a calm space
                    for ideas that matter. Whether you're a reader, a thinker, or a
                    writer — this is your place to explore knowledge and creativity.
                </p>
                <img
                    src="https://picsum.photos/900/300?random=24"
                    alt="Inspiration"
                    className="img-fluid rounded shadow-sm"
                />
            </section>

            <section className="join-section text-center p-5 rounded shadow-sm mb-5">
                <h2 className="fw-bold mb-3">Join Our Growing Community</h2>
                <p className="lead text-muted mb-4">
                    Start your journey as a writer, reader, or commenter today.
                </p>
                <a href="/create-account" className="btn btn-primary btn-lg px-4">
                    Create an Account
                </a>
            </section>


            <footer className="text-center text-muted py-4 mt-5 border-top small">
                © {new Date().getFullYear()} InsightHub — Made with ❤️ for learning React + Bootstrap.
            </footer>
        </div>
    );
}