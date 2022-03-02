const Background = ({children, className, ...rest}) => {
    return (
        <div className="bg-gray-900">
            <div className={`bg-shapes bg-cover py-8 ${className}`} {...rest}>
                {children}
            </div>
        </div>
    )
}

export default Background