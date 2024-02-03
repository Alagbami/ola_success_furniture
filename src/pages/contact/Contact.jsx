import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import { FaWhatsapp } from 'react-icons/fa';


import './contact.css'
import ContactForm from '../../components/ContactForm';

const Contact = () => {
  return (
    <>
      <Header title="Get In Touch" image={HeaderImage}>
        Connect with us and let's bring your vision to life. We are here to listen, collaborate,
        and create spaces that reflect your unique style and needs.
      </Header>

      <section className='contact'>
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href='mailto:leketech@gmail.com' target='_blank' rel='noreferrer noopener'><MdEmail /></a>
            <a href='http://m.me/adeleke_abiodun' target='_blank' rel='noreferrer noopener'><BsMessenger /></a>
            <a href='https://wa.me/+2348094770313' target='_blank' rel='noreferrer noopener'><FaWhatsapp /></a>
          </div>
          <ContactForm />
        </div>
      </section>
    </>

  )
}

export default Contact