import './HeroWithoutSorting.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import GreenTour  from '../GreenTour/GreenTour'

const HeroWithoutSorting = () => {
  return (
        <div className="greentour">
            <Navbar/>
            <GreenTour/>
            <Footer/>
        </div>
  )
}

export default HeroWithoutSorting