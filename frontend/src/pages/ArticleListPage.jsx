import articles from "../article-content";
import ArticleList from "../components/ArticleList";

export default function ArticleListPage (){
    return (
        <div className="container my-5">
            <div className="text-center mb-5">
                <h1 className="fw-bold">Articles</h1>
                <p className="text-muted fs-5">
                    Learn and explore our articles.
                </p>
            </div>

            <ArticleList articles={articles} />
        </div>
    );
}