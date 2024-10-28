import React, { useEffect, useState } from 'react'
import '../sass/Presentation.scss' // Importation du fichier SASS pour les styles

function Presentation() {
    return (
        <section className="container_section_presentation " id="Presentation">
            <div className="text_section_presentation">
                <div className="title_presentation">
                    <h2>Un peu sur moi</h2>
                </div>
                <div className="text_presentation">
                    <p>
                        Développeuse web passionnée, je me suis formée en JavaScript, Symfony et PHP
                        en 2021. Souhaitant approfondir mes connaissances en intégration web, j'ai
                        suivi une formation spécialisée en JavaScript et ReactJS sur OpenClassroom
                        en 2024. Je suis désormais prête à mettre mes compétences en pratique pour
                        créer des applications web modernes et interactives. Je suis impatiente de
                        partager mes projets et mes expériences avec vous !
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Presentation
