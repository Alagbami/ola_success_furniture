import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'


import './about.css'




const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Discover the story of our journey, vision, and mission towards creating exceptional spaces.
      </Header>
      
      <section className='about__story'>
        <div className='container about__story-container'>
          <div className='about__section-image'>
            <img src={StoryImage} alt='the story' />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Embark on a narrative of passion and craftsmanship, where every piece of furniture
              tells a tale of dedication and creativity.
            </p>
            <p>
              Uncover the chapters that define our evolution, from humble beginnings to a
              commitment to excellence in every detail.
            </p>
            <p>
              Join us on a journey shaped by a love for design, quality, and the pursuit of
              turning spaces into reflections of individuality.
            </p>
          </div>
        </div>
      </section>
      
      <section className='about__vision'>
        <div className='container about__vision-container'>
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Envision a world where spaces are not just filled with furniture but curated
              with elements that inspire, enhance, and define personal and professional
              realms.
            </p>
            <p>
              Our vision is to be the catalyst for transformative spaces, where design meets
              functionality, and every piece contributes to a harmonious environment.
            </p>
          </div>
          <div className='about__section-image'>
            <img src={VisionImage} alt='the vision'/>
          </div>
        </div>
      </section>

      <section className='about__mission'>
        <div className='container about__mission-container'>
          <div className='about__section-image'>
            <img src={MissionImage} alt='the mission'/>
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Committed to excellence, our mission is to craft furniture that transcends
              utility, embodying a fusion of aesthetics and functionality.
            </p>
            <p>
              We strive to create timeless pieces that resonate with individual tastes and
              preferences, enriching lives through the artistry of bespoke furniture.
            </p>
            <p>
              Join us in our mission to transform spaces into personalized sanctuaries that
              reflect the essence of those who inhabit them.
            </p>
          </div>
        </div>
      </section>

    </>
  );
};

export default About;
