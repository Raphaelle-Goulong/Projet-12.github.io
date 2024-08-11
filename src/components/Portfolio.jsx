import '../sass/Portfolio.scss'
import '../sass/_Animation.scss'
import React, { useEffect, useRef } from 'react'
import imageSrc from '../assets/images/johannes-plenio-fmTde1Fe23A-unsplash.jpg';
import images from '../assets/images/nikolay-u76CN5rZeOU-unsplash.jpg';
import imageSrcs from '../assets/images/yongguang-tian-3bnUiJ2lybY-unsplash.jpg';



function Portfolio() {
    return (
        <>
            <section className="section_container_portfolio">
                <div className="container_portfolio_carousel">
                    <div className="container_cards">
                        <article className="cards left_cards">
                        <img src={images} className="img_projets"/>
                        </article>
                        <article className="cards middle_card">
                            <img src={imageSrc} className="img_projet_center"/>
                        </article>
                        <article className="cards right_cards">
                        <img src={imageSrcs} className="img_projets"/>
                        </article>
                        

                    </div>
                    
                    <div className="container_cards_info" >
                        <article className="cards_info">
                            <div className='text_info'>
                                <h4>Projet : test1</h4>
                                {/* <p>technologies :</p> */}
                            </div>
                            <div className="icon_techno">                            
                                <i class="fa-solid fa-code"></i>
                                <i class="fa-brands fa-html5"></i>
                                <i class="fa-brands fa-css3-alt"></i>
                            </div>
                            <a href="#">Lien site</a>
                        </article>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio
