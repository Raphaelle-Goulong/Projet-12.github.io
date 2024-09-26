// Competence.js
import React from 'react';
import '../sass/Competence.scss';
import CompetenceData from '../CompetenceData.json'; // Assurez-vous que le chemin d'importation est correct

function Competence() {
    return (
        <div className='section_competence'>
            <div className="carousel_container" id="carousel_container">
                <div className="carousel">
                    <ul id="card-list">
                        {CompetenceData.map((item) => (
                            <li key={item.id}>
                                <div className="card">
                                    <a href="#">
                                        <i className={item.tech}></i> {/* Ajoute l'icône si nécessaire */}
                                        <span className="model-name">{item.title}</span>
                                        <p>{item.description}</p>
                                    </a>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="last-circle"></div>
                    <div className="second-circle"></div>
                </div>
                <div className="mask"></div>
                <div className="center-circle"></div>
            </div>
        </div>
    );
}

export default Competence;
