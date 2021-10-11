import { sections } from "../data/navbar";

const NavbarContent = () => {

    const goToSection = (id) => {
        const el = document.getElementById(id)
        const position = el.offsetTop
        window.scrollTo(0, position)
    }

    return (
        <ul className="flex justify-center">
            {sections.map((section, index) => 
                <li className="px-4 cursor-pointer" key={index} onClick={() => goToSection(section.hash)}>{section.text}</li>
            )}
        </ul>
    )
}

export default NavbarContent;