import './HeroWithSorting.css'
import dropdown_icon from '../Assets/dropdown_icon.png'
const HeroWithSorting = ({ banner }) => {
  return (
    <>
      <img className='shopcategory-banner' src={banner} alt="Props" />
        <div className="shopcategory-indexSort">
            <p><span>Showing 1-10 </span>out of 20</p>
            <div className="shopcategory-sort">
               Sort by <img src={dropdown_icon} alt="" />
            </div>
        </div>
    </>
  )
}

export default HeroWithSorting
