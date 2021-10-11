import { useState } from "react";
import BurgerMenu from "./BurgerMenu";
import UseAnimations from 'react-useanimations';
import menu3 from 'react-useanimations/lib/menu3'

const BurgerButton = () => {
    const [open, setOpen] = useState(true);

    return (
        <>
            <div className="fixed top-4 right-4 z-50">
                <UseAnimations
                reverse={open}
                onClick={() => {
                    setOpen(!open);
                }} 
                size={40}
                animation={menu3} />
            </div>
            <BurgerMenu open={open} setOpen={setOpen}/>
        </>
    )
}

export default BurgerButton;