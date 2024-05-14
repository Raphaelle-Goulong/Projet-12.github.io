import { BrowserRouter, Route, Routes } from 'react-router-dom'

import '../sass/App.scss'
import Footer from '../components/Footer'
import Home from './Home'
import Error from './Error'
import Header from '../components/Header'

function App() {
    return (
        <BrowserRouter>
            <>
                {/* Utilisation du composant Header */}
                <Header />
                {/* Utilisation du composant Routes pour gérer les différentes routes de l'application */}
                <Routes>
                    {/* Définition des routes */}
                    <Route path="/" element={<Home />} />
                    {/* <Route path="/about" element={<About />} />
                <Route path="/appartement/:id" element={<Appartement />} /> */}
                    <Route path="*" element={<Error />} />
                </Routes>
                {/* Utilisation du composant Footer */}
                <Footer />
            </>
        </BrowserRouter>
    )
}

export default App
