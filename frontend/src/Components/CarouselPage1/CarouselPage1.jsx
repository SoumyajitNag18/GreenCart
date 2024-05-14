import Carousel from 'react-bootstrap/Carousel';
import carousel1 from '../Assets/carousel1.png'
import carousel2 from '../Assets/carousel2.png'
import carousel3 from '../Assets/carousel3.png'

function CarouselPage1() {

  const mainList = [
    {title: "Might be wondering to get some Eco-Friendly Alternatives?" , description: "Slide into our Eco-friendly products range to bring about the changes." , img : carousel1},
    {title: "Why not get some Sustainable Alternatives for your daily use?" , description: "Get your Sustainable products delivered from us to you." , img : carousel2},
    {title: "Haven't embarked on the Green Tour yet?" , description: "Come on and take up the pledge to bring up the changes to save envirnoment." , img : carousel3},
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
              {/* <Carousel.Caption style={{background: "#3c5b3c80"}}>
                <h3>{eachItem.title}</h3>
                <p>{eachItem.description}</p>
              </Carousel.Caption> */}
            </Carousel.Item>
          )
        })}
    </Carousel>
    </div>
  )
}

export default CarouselPage1
