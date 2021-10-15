import NewsArticle from "./NewsArticle";

const News = ({ news }) => {
    return (
        <section id="news">
            <h2 className="text-4xl my-12 text-center">Actualités</h2>
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-3 gap-5">
                    {news.map(post => 
                        <NewsArticle key={post.sys.id} post={post}/>
                    )}
                </div>
            </div>
        </section>
    )
}

export default News;