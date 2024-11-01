import '../sass/Contact.scss'
import '../sass/_Animation.scss'
import emailjs from 'emailjs-com'
import { useState } from 'react'
function Contact() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }
    // EMAILJS
    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_r2jmlmy', 'template_h29wsij', e.target, 'BHcetdTcCGR0NtCfc').then(
            (result) => {
                console.log(result.text)
                alert('Message envoyé avec succès!')
            },
            (error) => {
                console.log(error.text)
                alert("Erreur lors de l'envoi du message.")
            }
        )

        e.target.reset() // Pour réinitialiser le formulaire après l'envoi
    }
    return (
        <>
            <section className="container_section_contact" id="Contact">
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
                                    <i className="fa-solid fa-x"></i>
                                </button>
                            </div>
                            <div className="contact_social_media">
                                <a
                                    href="https://www.linkedin.com/in/raphaelle-goulong-b999a4217/"
                                    className="link_social">
                                    <i className="fa-brands fa-linkedin"></i>
                                </a>
                                <a
                                    href="mailto:raphaelle.goulong@gmail.com"
                                    className="link_social">
                                    <i className="fa-solid fa-envelope"></i>
                                </a>
                                <a
                                    href="https://github.com/Raphaelle-Goulong"
                                    className="link_social">
                                    <i className="fa-brands fa-github"></i>
                                </a>
                            </div>
                            <form className="form_section_contact" onSubmit={sendEmail}>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Nom"
                                    required="required"
                                    className="input_contact"
                                />

                                <input
                                    type="text"
                                    name="firstName"
                                    id="firstName"
                                    placeholder="Prénom"
                                    required="required"
                                    className="input_contact"
                                />

                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    required="required"
                                    className="input_contact"
                                />

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
