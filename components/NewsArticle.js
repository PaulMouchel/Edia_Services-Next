import Image from 'next/image'
import Link from 'next/link'

export default function NewsArticle({ post }) {
    const { title, date, slug, thumbnail } = post.fields
    console.log(thumbnail)
    return (
        <div>
            {title}
            {date}
            {slug}           
            <Image 
            src={"https:" + thumbnail.fields.file.url}
            height={thumbnail.fields.file.details.image.height}
            width={thumbnail.fields.file.details.image.width}/>
            <button>
                <Link href={`/news/${slug}`}>
                    <a>En savoir plus</a>
                </Link>
            </button>
        </div>
    )
}
