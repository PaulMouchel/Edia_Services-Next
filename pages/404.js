import { useEffect } from "react"
import { useRouter } from "next/router"

export default function NotFound() {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 4000)
    }, [])
    return (
        <div>
            404
This page could not be found.
        </div>
    )
}
