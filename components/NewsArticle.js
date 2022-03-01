import Image from 'next/image'
import Link from 'next/link'
import { useFormatedDate } from '../hooks/useFormatedDate'

export default function NewsArticle({ post }) {
    const { title, date, slug, thumbnail, description } = post.fields
    const formatedDate = useFormatedDate(date)

    return (
        <article className="border relative pb-12 shadow-lg rounded-lg overflow-hidden">
            <div className="h-48 relative">
            <Image 
            src={"https:" + thumbnail.fields.file.url}
            layout="fill"
            objectFit="cover"
            />
            </div>
            <div className="p-2">
                <h4 className="text-xl font-bold pt-2">{title}</h4>
                <p className="text-right text-sm">le {formatedDate}</p>
                <p className="pt-3">{description}</p>
            </div>
            <button className="transition transform absolute right-0 bottom-0 bg-green py-2 pl-3 pr-4 font-bold text-white rounded-tl-lg focus:outline-none hover:translate-x-1">
                <Link href={`/news/${slug}`}>
                    <a>En savoir plus</a>
                </Link>
            </button>
        </article>
    )
}
