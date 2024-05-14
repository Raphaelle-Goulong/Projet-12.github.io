import '../sass/Error.scss'
// Importation du composant Link depuis react-router-dom pour créer un lien vers la page d'accueil
import { Link } from 'react-router-dom'

function Error() {
    return (
        <>
            <div className="container-error">
                {/* Titre de l'erreur */}
                <h1 className="Title-error">404</h1>
                {/* Message d'erreur */}
                <p className="Text-error">Oups! La page que vous demandez n'existe pas.</p>
                {/* Lien pour retourner à la page d'accueil */}
                <Link to="/" className="Link-error">Retourner sur la page d’accueil</Link>
            </div> 
       
       
        </> 
    )
    
}

export default Error