import { sections } from "../data/navbar";

const NavbarContent = () => {
    return (
        <ul className="flex justify-center">
            {sections.map((section, index) => 
                <a key={index} href={`#${section.hash}`}>
                    <li className="px-4">{section.text}</li>
                </a>
            )}
        </ul>
    )
}

export default NavbarContent;