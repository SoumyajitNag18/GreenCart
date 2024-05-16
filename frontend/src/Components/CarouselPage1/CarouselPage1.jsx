import Carousel from 'react-bootstrap/Carousel';
import carousel1 from '../Assets/carousel1.png'
import carousel2 from '../Assets/carousel2.png'
import carousel3 from '../Assets/carousel3.png'

function CarouselPage1() {

  const mainList = [{img : carousel1},{img : carousel2},{img : carousel3}]
  return (
    <div>
      <Carousel style={{width:"100%"}}>
        {mainList.map((eachItem , index) => {
          return (
            <Carousel.Item>
              <div className="d-block w-100">
              <img src={eachItem.img} alt="" style={{ width:"100vw" , height:"500px" ,objectFit:"cover" , objectPosition: "center"}}/>
              </div>
              
            </Carousel.Item>
          )
        })}
    </Carousel>
    </div>
  )
}

export default CarouselPage1
