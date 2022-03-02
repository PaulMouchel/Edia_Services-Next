import NewsArticle from "./NewsArticle";

const News = ({ news }) => {
    return (
        <section id="news" className="pt-12">
            <h2 className="text-4xl my-12 text-center">Actualités</h2>
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-4 gap-[2vw] pb-32">
                    {news.map(post => 
                        <NewsArticle key={post.sys.id} post={post}/>
                    )}
                </div>
            </div>
        </section>
    )
}

export default News;