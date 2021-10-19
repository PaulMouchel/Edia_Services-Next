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
        h-48
        md:h-64  
        border-2 
        border-green 
        focus:border-yellow 
        p-2 
        outline-none
        md:col-span-2
        md:row-span-4" 
        autoComplete="off" 
        
        required/>
    )
}

export default TextField;