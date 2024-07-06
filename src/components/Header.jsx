import '../sass/Header.scss'

function Header() {
    return (
        <>
           
            <div className="navbar">
                <h1 className="title_navbar">R.Goulong</h1>
                <nav className="section_li_navbar">
                    <ul className="home_section_navbar">
                        <li className="link_section"><a href="#" alt="Accueil">Accueil</a></li>
                        <li className="link_section"><a href="#" alt="Présentation">Présentation</a></li>
                        <li className="link_section"><a href="#" alt="Compétence">Compétence</a></li>
                        <li className="link_section"><a href="#" alt="Portfolio">Portfolio</a></li>
                        <li className="link_section"><a href="#" alt="Contact">Contact</a></li>
                    </ul>
                </nav>
            </div>

        </>
    )
}

export default Header
