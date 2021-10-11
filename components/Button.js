const Button = (props) => {
    return ( 
        <button className={`btn text-gray-100 text-xl border-2 border-yellow p-0.5 m-6 btn-hover-animation relative ${props.className}`} type={props.type} value={props.value}>
            <div className="relative px-6 py-3 overflow-hidden bg-blue">
                <div className="btn__slide absolute top-0 -bottom-1 -left-2 w-0 bg-green transform -skew-x-12 transition-all"></div>
                <span className="relative">{props.children}</span>
            </div>
        </button>
    )
}

export default Button;