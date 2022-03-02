import { useState } from "react";
import BurgerMenu from "./BurgerMenu";

const BurgerButton = () => {
    const [open, setOpen] = useState(false);
    const spanClasses = "block absolute bg-gray-700 h-1.5"

    return (
        <>
            <div className="fixed top-8 right-6 z-50">
                <div 
                id="nav-icon" 
                className={`${open && "open"} cursor-pointer relative`} 
                onClick={() => {setOpen(!open);}}>
                    <span className={spanClasses}></span>
                    <span className={spanClasses}></span>
                    <span className={spanClasses}></span>
                    <span className={spanClasses}></span>
                    <span className={spanClasses}></span>
                    <span className={spanClasses}></span>
                </div>
            </div>
            <BurgerMenu open={open} setOpen={setOpen}/>
            
        </>
    )
}

export default BurgerButton;