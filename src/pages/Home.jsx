import React, { useEffect, useState } from 'react'
import '../sass/Home.scss'
import Contact from '../components/Contact'
import Presentation from '../components/Presentation'
import Portfolio from '../components/Portfolio'
import Competence from '../components/Competence'

// Ensemble de caractères pour générer des lettres aléatoires
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
function Home() {
    // Le texte final à afficher
    const finalText = 'Développeuse' + '  ' + 'Web'
    // État pour gérer les lettres affichées, initialisé avec des chaînes vides
    const [displayText, setDisplayText] = useState(Array(finalText.length).fill(''))
    useEffect(() => {
        // Stocker les IDs des timeouts et des intervalles pour pouvoir les nettoyer plus tard
        let timeoutIds = []
        let intervalIds = []

        // Fonction pour changer chaque lettre à des caractères aléatoires avant de revenir à la lettre finale
        const changeLetter = (currentIndex, finalChar, delay) => {
            let iterations = 0
            const intervalId = setInterval(() => {
                // Sélection d'un caractère aléatoire
                const randomChar = characters[Math.floor(Math.random() * characters.length)]
                // Mise à jour de l'état avec le caractère aléatoire
                setDisplayText((prev) => {
                    const newText = [...prev]
                    newText[currentIndex] = randomChar
                    return newText
                })
                iterations += 1
                // Après 10 itérations, arrêter l'intervalle et fixer la lettre finale
                if (iterations > 10) {
                    clearInterval(intervalId)
                    intervalIds = intervalIds.filter((id) => id !== intervalId)
                    setDisplayText((prev) => {
                        const newText = [...prev]
                        newText[currentIndex] = finalChar
                        return newText
                    })
                }
            }, delay)

            // Stocker l'ID de l'intervalle pour le nettoyer plus tard
            intervalIds.push(intervalId)
        }

        // Création des timeouts pour chaque lettre du texte final
        finalText.split('').forEach((char, index) => {
            const timeoutId = setTimeout(() => {
                // Appel de changeLetter pour chaque caractère après un certain délai
                changeLetter(index, char, 50)
            }, index * 300)
            // Stocker l'ID du timeout pour le nettoyer plus tard
            timeoutIds.push(timeoutId)
        })

        // Nettoyage des intervalles et des timeouts lorsque le composant est démonté
        return () => {
            timeoutIds.forEach((id) => clearTimeout(id))
            intervalIds.forEach((id) => clearInterval(id))
        }
    }, [finalText])

    return (
        <>
            <section className="container_section_home" id="Home">
                <div className="titles_section_home">
                    <h2>Hello World !</h2>
                    <h2>
                        Je suis <span>Raphaelle Goulong</span>
                    </h2>
                    <h3 className="animated-text">
                        {displayText.map((char, index) => (
                            <span
                                key={index}
                                className="changing_letter"
                                style={{
                                    animationDelay: `${index * 0.5}s`
                                }}>
                                {char}
                            </span>
                        ))}
                    </h3>
                </div>
            </section>
            <section id="Presentation">
                <Presentation />
            </section>
            <section id="Competence ">
                <Competence />
            </section>
            <section id="Portfolio ">
                <Portfolio />
            </section>
            <section id="Contact ">
                <Contact />
            </section>
        </>
    )
}

export default Home
