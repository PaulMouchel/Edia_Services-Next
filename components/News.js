import NewsArticle from "./NewsArticle";

const News = ({ news }) => {
    console.log(news)
    return (
        <section id="news">
            <h2 className="text-4xl my-12 text-center">Actualités</h2>
            {news.map(post => 
                <NewsArticle key={post.sys.id} post={post}/>
            )}
        </section>
    )
}

export default News;