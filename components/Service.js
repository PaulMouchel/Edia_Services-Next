const Service = (props) => {
    return (
        <li className="text-white py-12 md:py-12 md:px-6 flex flex-col w-2/3 md:w-1/2 m-auto items-center text-center">
            <img src={props.img} className="mb-3"/>
            <span>{props.text}</span>
        </li>
    )
}

export default Service;