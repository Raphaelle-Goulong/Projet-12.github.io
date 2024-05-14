import { Route, Routes } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
        {/* Utilisation du composant Header */}
            <Header />
          {/* Utilisation du composant Routes pour gérer les différentes routes de l'application */}
            <Routes>
              {/* Définition des routes */}
                {/* <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/appartement/:id" element={<Appartement />} />
                <Route path="*" element={<Error />} /> */}
            </Routes>
            {/* Utilisation du composant Footer */}
            <Footer />
        </>
  );
}

export default App;
