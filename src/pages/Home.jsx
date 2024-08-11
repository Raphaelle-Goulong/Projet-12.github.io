import '../sass/Home.scss'
import Contact from '../components/Contact'
import Presentation from '../components/Presentation'
import Portfolio from '../components/Portfolio'


function Home() {
    return (
        <>
        <section className="section_container_home">
            
        <Presentation />
        <Portfolio />
        <Contact />
        </section>
        
        </>
    )
}


export default Home
