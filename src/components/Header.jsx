import '../sass/Header.scss'
import { useState } from 'react'

function Header() {
    // État pour contrôler l'ouverture et la fermeture du menu
    const [menuOpen, setMenuOpen] = useState(false)

    // Fonction qui bascule l'état d'ouverture du menu
    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <>
            <div className="navbar">
                <h1 className="title_navbar">R.Goulong</h1>
                
                {/* Bouton hamburger */}
                <div className="container_button_hamburger">
                    <div
                        id="button_hamburger"
                        className={menuOpen ? 'open' : ''}
                        onClick={toggleMenu}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                
                {/* Navigation avec overlay */}
                <nav className={`section_li_navbar ${menuOpen ? 'open' : ''}`}>
                    <ul className="home_section_navbar">
                        <li className="link_section">
                            <a href="#Home" alt="Accueil">
                                Accueil
                            </a>
                        </li>
                        <li className="link_section">
                            <a href="#Presentation" alt="Présentation">
                                Présentation
                            </a>
                        </li>
                        <li className="link_section">
                            <a href="#Competence" alt="Compétence">
                                Compétence
                            </a>
                        </li>
                        <li className="link_section">
                            <a href="#Portfolio" alt="Portfolio">
                                Portfolio
                            </a>
                        </li>
                        <li className="link_section">
                            <a href="#Contact" alt="Contact">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Header
