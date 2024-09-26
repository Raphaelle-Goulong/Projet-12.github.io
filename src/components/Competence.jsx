// Competence.js
import React, { useState } from 'react';
import '../sass/Competence.scss';
import CompetenceData from '../CompetenceData.json'; // Assurez-vous que le chemin d'importation est correct

function Competence() {
    return (
        <div className='section_competence'>
            <h2>Compétences</h2>
            <div className="carousel_container" id="carousel_container">
                <div className="carousel">
                    <ul id="card-list">
                        {CompetenceData.map((item) => (
                            <li key={item.id}>
                                <div className="card">
                                    <article className="test"> 
                                        <i className={item.tech}></i> 
                                        <span className="model-name">{item.title}</span>
                                        <TextWithToggle description={item.description} />
                                    </article>
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

function TextWithToggle({ description }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleText = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="text-container" onClick={toggleText} style={{ cursor: 'pointer' }}>
            <p className={isExpanded ? 'expanded' : 'collapsed'}>
                {description}
            </p>
            {!isExpanded }
        </div>
    );
}

export default Competence;
