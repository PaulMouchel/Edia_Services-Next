const InputField = (props) => {
    return (
        <input {...props}   
        ref={props.reference}
        className="
        bg-white
        text-gray-800 
        resize-none 
        block   
        w-full
        border-2 
        border-green 
        focus:border-yellow 
        p-2     
        outline-none" 
        required/>
    )
}

export default InputField;