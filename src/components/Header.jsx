import '../sass/Header.scss'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <div className="navbar">
                <h1 className="title_navbar">R.Goulong</h1>
                <nav className="section_li_navbar">
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
