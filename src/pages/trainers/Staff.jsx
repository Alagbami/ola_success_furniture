import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_5.jpg'
import { trainers } from '../../data'
import { BsInstagram } from 'react-icons/bs'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import Trainer from '../../components/Trainer'

import './staff.css'

const Staff = () => {
  return (
    <>
      <Header title="Our Admin" image={HeaderImage}>
        At the heart of our organization is a dedicated administrative team,
        working tirelessly to ensure seamless operations and exceptional service.
        Learn more about the individuals who drive our success.
      </Header>
      <section className='trainers'>
        <div className='container trainers__container'>
          {
            trainers.map(({id, image, name, job, socials}) => {
             return <Trainer key={id} image={image} name={name} job={job} 
                socials={
                  [
                    {icon: <BsInstagram/>, link: socials[0]},
                    {icon: <AiOutlineTwitter/>, link: socials[1]},
                    {icon: <FaFacebookF/>, link: socials[2]},
                    {icons: <FaLinkedin/>, link: socials[3]}
                  ] 
                } />
            })
          }
        
        </div> 

      </section>
    </>
  )
}

export default Staff;