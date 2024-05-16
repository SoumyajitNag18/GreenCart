import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../path_to_your_static/logo121.jpg';
// import opencvImage from '../path_to_your_static/OpenCV.png';

const About = () => {
  return (
    <div>
      {/* HEADER */}
      <header className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link className="flex title-font font-medium items-center text-white mb-4 md:mb-0" to="/home">
            {/* <img src={logo} alt="Logo" /> */}
            <span className="ml-3 text-xl"><b><i>GreenCart</i></b></span>
          </Link>
        </div>
      </header>

      {/* GALLERY */}
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
            {/* <img className="object-cover object-center rounded" alt="hero" src={opencvImage} /> */}
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">WHAT IS OPEN CV?</h1>
            <p className="mb-8 leading-relaxed">
            In recent years, the drive towards sustainable living has gained significant momentum, spurred by growing environmental concerns and the shift in consumer behavior towards eco-friendly products. Our Greencart platform is a direct response to this increasing demand for sustainable alternatives. Unlike traditional marketplaces, Greencart is dedicated exclusively to offering eco-friendly products, thereby addressing the urgent need for environmentally conscious shopping options. <br />
            Our motivation stems from the pressing environmental issues that are reshaping consumer preferences and behaviors. With climate change, pollution, and resource depletion becoming critical global concerns, there is an undeniable need for platforms that prioritize sustainability. Greencart aims to bridge this gap by providing a marketplace that not only meets consumer demand for green products but also promotes a culture of environmental responsibility and ethical consumption.
            </p>
            <div className="flex justify-center">
              <a
                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                href="https://opencv.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Know more
              </a>
            </div>
          </div>
        </div>
        <div className="container px-5 mx-auto flex flex-wrap">
          <div className="flex w-full flex-wrap">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-white lg:w-1/10 lg:mb-0 mb-4">
              Why is Open CV used?
            </h1>
          </div>
          <p>
            - It is open-source and freely available, making it a cost-effective solution for
            developers. <br />
            - It has a large and active community of users and developers, which means that
            there is a wealth of support and resources available online.<br />
            - It is highly modular and customizable, allowing developers to select and use only
            the features and algorithms that they need for their specific application.<br />
            - It has bindings for a wide range of programming languages, including C++, Python,
            and Java, which makes it easy to integrate into existing projects.<br />
            - It has been optimized for performance and can take advantage of hardware
            acceleration on supported platforms, making it suitable for real-time applications.
          </p>
        </div>
        <div className="container px-5 py-5 mx-auto flex flex-wrap">
          <div className="flex w-full flex-wrap">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-white lg:w-1/10 lg:mb-0 mb-4">
              Is it possible to develop our own library like Open CV?
            </h1>
          </div>
          <p>
            Yes, it is possible to develop your own library for computer vision tasks, similar to
            OpenCV. However, keep in mind that creating a library like OpenCV is a significant
            undertaking and would require a deep understanding of computer vision and machine
            learning algorithms, as well as a strong background in software development.
            To create a library like OpenCV, you would need to implement a wide range of functions
            and algorithms for tasks such as image and video processing, feature detection and
            extraction, object detection and recognition, and more. You would also need to design
            and implement a robust API (Application Programming Interface) to allow developers to
            easily use your library in their own applications.
            In addition to the technical challenges, developing a library like OpenCV would also
            require a significant amount of time and resources. It would likely involve a team of
            developers working together to design and implement the various features and
            functions of the library.
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

      {/* FOOTER */}
      <footer className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <Link className="flex title-font font-medium items-center md:justify-start justify-center text-white" to="/home">
            {/* <img src={logo} alt="Logo" /> */}
            <span className="ml-3 text-xl"><b><i><a href="mailto:soumyajitnag18@gmail.com">DETECT-U</a></i></b></span>
          </Link>
          <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
            © 2022-23 DTU — @SISA <br />Picture Source: @Internet
          </p>
        </div>
      </footer>
    </div>
  );
};

export default About;
