import '../sass/Home.scss'
import Contact from '../components/Contact'
import Presentation from '../components/Presentation'
import Portfolio from '../components/Portfolio'
import Competence from '../components/Competence'

function Home() {
    return (
        <>
        <section className="section_container_home">
            
        <Presentation />
        <Competence />
        <Portfolio />
        <Contact />
        </section>
        
        </>
    )
}


export default Home
