const Service = (props) => {
    return (
        <li className="text-white py-4 flex items-center">
            <props.icon className="text-3xl mr-4"/>
            <span>{props.text}</span>
        </li>
    )
}

export default Service;