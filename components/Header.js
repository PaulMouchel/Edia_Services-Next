import Navbar from "./Navbar";
import BurgerButton from "./BurgerButton";

const Header = () => {
    return (
        <>
            <div className="hidden md:block">
                <Navbar/>
            </div>
            <div className="block md:hidden">
                <BurgerButton/>
            </div>
        </>
    )
}

export default Header;