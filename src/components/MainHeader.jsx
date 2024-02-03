import { Link } from "react-router-dom"
import MainHeaderChair from '../images/main_header.png'

const MainHeader = () => {
  return (
    <header className="main__header">
        <div className="container main__header-container">
          <div className="main__header-left">
            <h2>Ola-Sucesss</h2>
            <h1>Creative Home Simpify your Furniture</h1>
            <p>
              Simplify Your Furniture, Transform Your Living Space, 
              and Redefine Comfort with Innovative Design Solutions that Inspire a Unique and Stylish Lifestyle
            </p>
            <Link to='/gallery' className="btn lg">Get Started</Link>
          </div>
          <div className="main__header-right">
            <div className="main__header-image">
              <img src={MainHeaderChair} alt="Main Header" />
            </div>
          </div>
        </div>
    </header>
  )
}

export default MainHeader 