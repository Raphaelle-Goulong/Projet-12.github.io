import '../sass/Contact.scss'
import '../sass/_Animation.scss'
//import backgroundImage from '../assets/images/nikolay-u76CN5rZeOU-unsplash.jpg'
import { useState } from 'react'
function Contact() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    return (
        <>
            <section className="container_section_contact">
                <div className="content_section_contact">
                    <h2 className="title_section_contact">Prêt à travailler ensemble ?</h2>
                    <button className="btn_contact" onClick={openModal}>
                        {' '}
                        Contact
                    </button>
                </div>
                {isModalOpen && (
                    <div className="contact_modal slidein">
                        <div className="contact_file_section">
                            <div className="top_section_contact">
                                <h3>Contact</h3>
                                <button className="Button_close" onClick={closeModal}>
                                    <i class="fa-solid fa-x"></i>
                                </button>
                            </div>
                            <div className="contact_social_media">
                                <a
                                    href="https://www.linkedin.com/in/raphaelle-goulong-b999a4217/"
                                    className="link_social">
                                    <i class="fa-brands fa-linkedin"></i>
                                </a>
                                <a
                                    href="mailto:raphaelle.goulong@gmail.com"
                                    className="link_social">
                                    <i class="fa-solid fa-envelope"></i>
                                </a>
                                <a
                                    href="https://github.com/Raphaelle-Goulong"
                                    className="link_social">
                                    <i class="fa-brands fa-github"></i>
                                </a>
                            </div>
                            <form className="form_section_contact">
                                {/* <label htmlFor="name">Nom</label> */}
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Nom"
                                    required="required"
                                    className="input_contact"
                                />
                                {/* <label htmlFor="firstName">Prénom</label> */}
                                <input
                                    type="text"
                                    name="firstName"
                                    id="firstName"
                                    placeholder="Prénom"
                                    required="required"
                                    className="input_contact"
                                />
                                {/* <label htmlFor="email">Email</label> */}
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    required="required"
                                    className="input_contact"
                                />
                                {/* <label htmlFor="message">Message</label> */}
                                <textarea
                                    name="message"
                                    id="message"
                                    cols="30"
                                    rows="10"
                                    placeholder="Message"
                                    required="required"
                                    className="input_contact"></textarea>
                                <input
                                    type="submit"
                                    value="Envoyer"
                                    className="input_contact"
                                    id="btn_send"
                                />
                            </form>
                        </div>
                    </div>
                )}
            </section>
        </>
    )
}

export default Contact
