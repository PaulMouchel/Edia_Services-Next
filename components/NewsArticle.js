import Image from 'next/image'
import Link from 'next/link'
import { useFormatedDate } from '../hooks/useFormatedDate'

export default function NewsArticle({ post }) {
    const { title, date, slug, thumbnail } = post.fields
    const formatedDate = useFormatedDate(date)

    return (
        <div className="border">
            <Image 
            src={"https:" + thumbnail.fields.file.url}
            height={thumbnail.fields.file.details.image.height}
            width={thumbnail.fields.file.details.image.width}/>
            <div className="p-2">
            <h4 className="text-xl font-bold">{title}</h4>
            {formatedDate}          
            </div>
            <button>
                <Link href={`/news/${slug}`}>
                    <a>En savoir plus</a>
                </Link>
            </button>
        </div>
    )
}
