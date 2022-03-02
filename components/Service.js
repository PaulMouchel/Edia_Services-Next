import Image from 'next/image'

const Service = (props) => {
    return (
        <li className="text-white py-12 md:py-12 md:px-6 flex flex-col w-2/3 md:w-1/2 m-auto items-center text-center gap-3">
            <div>
                <Image src={props.img} height={60} width={60} alt={props.alt}/>
            </div>
            <span className='h-20'>{props.text}</span>
        </li>
    )
}

export default Service;