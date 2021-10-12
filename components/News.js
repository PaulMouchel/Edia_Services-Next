import { news } from "../data/news";

const News = () => {
    return (
        <section id="news">
            <h2 className="text-4xl my-12 text-center">Actualités</h2>
            {news.map((article, index) =>
                <p key={index}>{article}</p>
            )}
        </section>
    )
}

export default News;