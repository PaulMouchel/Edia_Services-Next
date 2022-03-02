import { sections } from "../data/navbar";
import NavbarContentItem from "./NavbarContentItem";

const NavbarContent = () => {

    return (
        <ul className="flex justify-center items-center h-full">
            {sections.map((section, index) => 
                <NavbarContentItem key={index} {...section}/>
            )}
        </ul>
    )
}

export default NavbarContent;