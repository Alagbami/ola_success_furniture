import { Link } from "react-router-dom"
import Logo from '../images/logo.png'
import { FaLinkedin } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { AiOutlineTwitter } from "react-icons/ai"
import { AiFillInstagram } from "react-icons/ai"



const Footer = () => {

  const olaCompany = "Ola-Funiture";

    // Get current year
  const currentYear = new Date().getFullYear();

  //Get techCompany name and address
  const techCompany = "LekTech-Consult";
  const techCompanyWebAddress = "https://adeleke-abiodun.netlify.app/";


  return (
    <footer>
        <div className="container footer__container">
            <article>
                <Link to="/" className="logo">
                    <img src={Logo} alt="Footer Logo"/>
                </Link>
                <p>
                    Explore a world of exquisite craftsmanship and timeless design with our furniture collection. 
                    We are dedicated to bringing beauty and comfort to your spaces, creating environments that inspire and delight.
                </p>
                <div className="footer__socials">
                    <a href="http://linkedin.com/" target="_blank" rel='noreferrer nooperler'><FaLinkedin/></a>
                    <a href="http://facebook.com/" target="_blank" rel='noreferrer nooperner'><FaFacebook/></a>
                    <a href="http://twitter.com/" target="_blank" rel='noreferrer nooperner'><AiOutlineTwitter/></a>
                    <a href="http://instagram.com/" target="_blank" rel='noreferrer nooperner'><AiFillInstagram/></a>
                </div>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to="/about">About</Link>
                <Link to="/staff">Staff</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </article>
            <article>
                <h4>Get in Touch</h4>
                <Link to="/contact">Contact Us</Link>
                <Link to="/contact">Support</Link>
            </article>
        </div>
        <div className="footer__copyright">
            <small>
                {currentYear} {olaCompany} &nbsp; | &nbsp; 
                <a href={techCompanyWebAddress} target="_blank" rel="noreferrer">{techCompany}</a> 
                &nbsp; &copy; All Rights Reserved
            </small>
        </div>
    </footer>
  )
}

export default Footer