import '../sass/Contact.scss'
//import backgroundImage from '../assets/images/nikolay-u76CN5rZeOU-unsplash.jpg'

function Contact() {
    return (
        <>
            <section className="container_section_contact">
                <div className="content_section_contact">
                    <h2 className="title_section_contact">Prêt à travailler ensemble ?</h2>
                     <button className="btn_contact"> Contact</button>              
                </div>
                <div className="contact_file_section">
                    <h3>Contact</h3>
                    <div className="contact_social_media">
                        <span className="link_social">link</span>
                        <span className="link_social">email</span>
                        <span className="link_social">X</span>

                    </div>
                    <form className="form_section_contact" >
                        {/* <label htmlFor="name">Nom</label> */}
                        <input type="text" name="name" id="name" placeholder="Nom" required="required" className="input_contact" />
                        {/* <label htmlFor="firstName">Prénom</label> */}
                        <input type="text" name="firstName" id="firstName" placeholder="Prénom" required="required" className="input_contact" />
                        {/* <label htmlFor="email">Email</label> */}
                        <input type="email" name="email" id="email" placeholder="Email" required="required" className="input_contact"/>
                        {/* <label htmlFor="message">Message</label> */}
                        <textarea name="message" id="message" cols="30" rows="10" placeholder="Message" required="required" className="input_contact"></textarea>
                        <input type="submit" value="Envoyer" className="input_contact" id="btn_send"/>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contact
