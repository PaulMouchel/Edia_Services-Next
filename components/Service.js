const Service = (props) => {
    return (
        <li className="text-white py-6 flex items-center">
            <img src={props.img} className="mr-5"/>
            <span>{props.text}</span>
        </li>
    )
}

export default Service;