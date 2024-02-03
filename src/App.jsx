import { BrowserRouter, Routes, Route } from "react-router-dom"


import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import Gallery from "./pages/gallery/Gallery"
//import Plans from "./pages/plans/Plans"
import Staff from "./pages/trainers/Staff"
import NotFound from "./pages/notFound/NotFound"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"


export const App = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="gallery" element={<Gallery/>}/>
          {/*<Route path="plans" element={<Plans/>}/>*/}
          <Route path="staff" element={<Staff/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default App