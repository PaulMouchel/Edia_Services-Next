const TextField = (props) => {
    return (
        <textarea {...props}
        ref={props.reference}
        type="text" 
        name="message" 
        className="
        bg-white
        text-gray-800 
        resize-none 
        block 
        h-48
        md:h-64  
        w-full
        border-2 
        border-green 
        focus:border-yellow 
        p-2 
        outline-none" 
        autoComplete="off" 
        
        required/>
    )
}

export default TextField;