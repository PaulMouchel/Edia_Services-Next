const Navbar = () => {
    return (
        <nav className="bg-blue text-white py-6">
            <ul className="flex justify-center">
                <a href='#services'>
                    <li className="px-4">Nos Services</li>
                </a>
                <a href='#realisations'>
                    <li className="px-4">Nos Réalisations</li>
                </a>
                <a href='#partenaires'>
                    <li className="px-4">Nos Partnaires</li>
                </a>
                <a href='#contact'>
                    <li className="px-4">Nous contacter</li>
                </a>
            </ul>
        </nav>
    )
}

export default Navbar;