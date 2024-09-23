import '../sass/Portfolio.scss';
import '../sass/_Animation.scss';
import React, { useState, useEffect, useRef } from 'react';
import data from '../data.json'

function Portfolio() {
    const [projects, setProjects] = useState([]);
    const [currentProject, setCurrentProject] = useState(0);
    const intervalRef = useRef(null); // Référence pour l'intervalle de défilement

    // Charger les données depuis le fichier JSON
    useEffect(() => {
        fetch('../data.json')
        .then((response) => response.json())
        .then((data) => setProjects(data))
        .catch((error) => console.error('Error fetching data:', error));
        // Afficher les données dans la console pour le débogage
        console.log(data);
        setProjects(data);
    }, []);


    // Fonction pour passer au projet suivant
    const nextProject = () => {
        setCurrentProject((prev) => (prev + 1) % projects.length);
    };

    // Fonction pour revenir au projet précédent
    const prevProject = () => {
        setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
    };

    // Défilement automatique toutes les 5 secondes
    useEffect(() => {
        startAutoSlide();
        return () => stopAutoSlide(); // Nettoyage de l'intervalle lors du démontage du composant
    }, [currentProject]);

    const startAutoSlide = () => {
        stopAutoSlide(); // Arrêter tout intervalle existant
        intervalRef.current = setInterval(nextProject, 5000); // Changer d'image toutes les 5 secondes
    };

    const stopAutoSlide = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    };

    // if (projects.length === 0) {
    //     return <div>Loading...</div>;
    // }

    const current = currentProject;
    const next = (current + 1) % projects.length;
    const prev = (current - 1 + projects.length) % projects.length;

    return (
        <>
            <section className="section_container_portfolio">
                {/* Carousel */}
                <div className="container_portfolio_carousel">
                    <div className="container_cards">
                        {/* left card*/}
                        <article
                            className="cards left_cards"
                            onClick={prevProject}
                        >
                            <img src={projects[prev].cover} alt={projects[prev].title} className="img_projets" />
                        </article>
                        {/* middle card */}
                        <article
                            className="cards middle_card"
                            onMouseEnter={stopAutoSlide} // Arrêter le défilement au survol
                            onMouseLeave={startAutoSlide} // Reprendre le défilement en quittant
                        >
                            <img src={projects[current].cover} alt={projects[current].title} className="img_projets" />
                        </article>
                        {/* right card */}
                        <article
                            className="cards right_cards"
                            onClick={nextProject}
                        >
                            <img src={projects[next].cover} alt={projects[next].title} className="img_projets" />
                        </article>
                    </div>

                    {/* Informations projet */}
                    <div className="container_cards_info">
                        <article className="cards_info">
                            <div className="text_info">
                                <h4>{projects[current].title}</h4>
                                <p>{projects[current].description}</p>
                            </div>
                            <div className="icon_techno">
                                {projects[current].tech.map((tech, index) => (
                                    <i key={index} className={tech}></i>
                                ))}
                            </div>
                            <a href={projects[current].liens} target="_blank" rel="noopener noreferrer">
                                Voir le site
                            </a>
                        </article>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Portfolio;
