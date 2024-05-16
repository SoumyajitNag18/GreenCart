import React from 'react';
import { Link } from 'react-router-dom';
import about from '../Components/Assets/About.jpg';
// import opencvImage from '../path_to_your_static/OpenCV.png';

const About = () => {
  return (
    <div>
      {/* HEADER */}
      <header className="text-gray-400 bg-gray-900 body-font" style={{background: "linear-gradient(180deg, #7fbf7f, #e1ffea22 80%)"}}>
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link className="flex title-font font-medium items-center text-white mb-4 md:mb-0" to="/home">
            <img src={about} alt="About.jpg" style={{width:"70%", marginLeft:"15%", }}/>
          </Link>
        </div>
      </header>

      {/* GALLERY */}
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">WHAT IS GREENCART?</h1>
            <p className="mb-8 leading-relaxed">
            In recent years, the drive towards sustainable living has gained significant momentum, spurred by growing environmental concerns and the shift in consumer behavior towards eco-friendly products. Our Greencart platform is a direct response to this increasing demand for sustainable alternatives. Unlike traditional marketplaces, Greencart is dedicated exclusively to offering eco-friendly products, thereby addressing the urgent need for environmentally conscious shopping options. <br />
            Our motivation stems from the pressing environmental issues that are reshaping consumer preferences and behaviors. With climate change, pollution, and resource depletion becoming critical global concerns, there is an undeniable need for platforms that prioritize sustainability. Greencart aims to bridge this gap by providing a marketplace that not only meets consumer demand for green products but also promotes a culture of environmental responsibility and ethical consumption.
            </p>
          </div>
        </div>
        <div className="container px-5 mx-auto flex flex-wrap">
          <div className="flex w-full flex-wrap">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-black lg:w-1/10 lg:mb-0 mb-4">
            MISSION</h1>
          </div>
          <p className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
At Greencart, our mission is to empower consumers to make environmentally responsible choices by providing a comprehensive platform for sustainable and eco-friendly products. We are dedicated to supporting companies that are committed to environmental preservation and sustainability. By fostering a marketplace that prioritizes natural and earth-friendly products, we aim to drive a positive impact on the planet and inspire a global shift towards sustainable living.
          </p>
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center flex flex-wrap">
          <div className="flex w-full flex-wrap">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-black lg:w-1/10 lg:mb-0 mb-4">
            VISION</h1>
          </div>
          <p>
          Our vision is to be the leading e-commerce destination for sustainable and eco-friendly products, recognized globally for our commitment to environmental stewardship and innovation. We envision a world where sustainable living is the norm, and every purchase contributes to a healthier planet. By continuously expanding our product offerings, partnering with forward-thinking brands, and leveraging the influence of eco-conscious creators and influencers, we strive to create a thriving community that champions sustainability and inspires lasting change.
          </p>
        </div>
        <div className="card-footer px-8">
          <small className="text-muted">
            <a
              href="https://www.canva.com/design/DAFWgTUfUkA/3Pz1eU6gjl4IP77JbPplYg/edit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
            >
              View PPT
            </a>
          </small>
        </div>
      </section>
    </div>
  );
};

export default About;
