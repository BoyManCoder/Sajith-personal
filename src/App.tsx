import './index.css'
import NavBar from './components/NavBar'
import HomeGrid from './components/HomeGrid'
import Education from './components/Education'
import Projects from './components/Projects'
import Contacts from './components/Contacts'
import ImageGallery from './components/ImageGallery'
import Footer from './components/Footer'
import EmTechBrand from './components/EmTechBrand'

function App() {
  return (
    <>
    <NavBar/>
    <EmTechBrand/>
    <HomeGrid/>
    <Education/>
    <Projects/>
    <Contacts/>
    <ImageGallery/>
    <Footer/>
    </>
  )
}

export default App
