export default function NewsArticle({ post }) {
    const { title } = post.fields
    return (
        <div>
            {title}
        </div>
    )
}
