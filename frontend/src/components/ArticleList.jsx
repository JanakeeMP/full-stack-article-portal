import { Link } from "react-router-dom";

export default function ArticleList({ articles }) {
  return (
    <div className="row g-4">
      {articles.map(a => (
        <div className="col-md-6 col-lg-4" key={a.name}>
          <div className="card h-100 shadow-sm">

            <Link 
              to={`/articles/${a.name}`} 
              className="text-decoration-none text-dark"
            >
              <div className="card-body">
                <h5 className="card-title text-primary">{a.title}</h5>
                <p className="card-text text-muted">
                  {a.content[0].substring(0, 250)}...
                </p>
              </div>
            </Link>

          </div>
        </div>
      ))}
    </div>
  );
}