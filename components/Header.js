import Navbar from "./Navbar";
import BurgerButton from "./BurgerButton";

const Header = () => {
    return (
        <>
            <div className="hidden lg:block">
                <Navbar/>
            </div>
            <div className="block lg:hidden">
                <BurgerButton/>
            </div>
        </>
    )
}

export default Header;