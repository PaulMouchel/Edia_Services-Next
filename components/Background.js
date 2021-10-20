export default function Background({children, className, ...rest}) {
    return (
        <div className="bg-bg bg-cover">
            <div className={`bg-opacity-70 bg-blue ${className}`} {...rest}>
                {children}
            </div>
        </div>
    )
}
