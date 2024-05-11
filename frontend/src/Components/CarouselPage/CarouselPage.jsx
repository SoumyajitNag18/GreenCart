import Carousel from 'react-bootstrap/Carousel';
import carousel1 from './carousel1.png'
import carousel2 from './carousel2.png'
import carousel3 from './carousel3.png'

function CarouselPage() {

  const mainList = [
    {title: "First slide label" , description: "Nulla vitae elit libero, a pharetra augue mollis interdum." , img : carousel1},
    {title: "Second slide label" , description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." , img : carousel2},
    {title: "Third slide label" , description: "Praesent commodo cursus magna, vel scelerisque nisl consectetur." , img : carousel3},
  ]
  return (
    <div>
      <Carousel style={{width:"100%"}}>
        {mainList.map((eachItem , index) => {
          return (
            <Carousel.Item>
              <div className="d-block w-100">
              <img src={eachItem.img} alt="" style={{ width:"100vw" , height:"500px" ,objectFit:"cover" , objectPosition: "center"}}/>
              </div>
        
        <Carousel.Caption>
          <h3>{eachItem.title}</h3>
          <p>{eachItem.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
          )
        })}
    </Carousel>
    </div>
  )
}

export default CarouselPage
