import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../static/logo121.jpg';
// import soumyajitImage from '../static/Soumyajit.jpg';
// import anirudhImage from '../static/Anirudh.png';
// import srijanImage from '../static/Srijan.jpg';
// import suvenduImage from '../static/suvendu-chowdhury-ab6141244';

const Team = () => {
  return (
    <div>
      {/* HEADER */}
      <header className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link to="/home" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            {/* <img src={logo} alt="Detect-U Logo" /> */}
            <span className="ml-3 text-xl"><b><i>DETECT-U</i></b></span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link className="mr-5 hover:text-white" to="/home">HOME</Link>
            <Link className="mr-5 hover:text-white" to="/about">ABOUT</Link>
            <Link className="mr-5 hover:text-white" to="/team">TEAM</Link>
          </nav>
        </div>
      </header>

      {/* TEAMMATES */}
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-2xl font-medium title-font mb-4 text-white tracking-widest">OUR TEAM</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">The team which is always open to learn, execute and work in collaborative manner.</p>
          </div>
          <div className="flex flex-wrap -m-4">
            <TeamMember
              // image={soumyajitImage}
              name="Soumyajit Nag"
              role="Website Developer"
              email="soumyajitnag18@gmail.com"
              linkedin="https://www.linkedin.com/in/soumyajit-nag-a93898212/"
            />
            <TeamMember
              // image={anirudhImage}
              name="Anirudh Jalan"
              role="Website Developer"
              email="anirudhjalan2001@gmail.com"
              linkedin="https://www.linkedin.com/in/anirudh-jalan1/"
            />
            <TeamMember
              // image={srijanImage}
              name="Srijan Singh"
              role="Website Developer"
              email="srijan32002@gmail.com"
              linkedin="https://www.linkedin.com/in/srijan-singh-556362260/"
            />
            <TeamMember
              // image={suvenduImage}
              name="Suvendu Chowdhury"
              role="Website Developer"
              email="Suvendu@gmail.com"
              linkedin="https://www.linkedin.com/in/suvendu-chowdhury-ab6141244/"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <Link to="/home" className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            {/* <img src={logo} alt="Detect-U Logo" /> */}
            <span className="ml-3 text-xl"><b><i>DETECT-U</i></b></span>
          </Link>
          <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
            © 2022-23 DTU — @SISA <br />Picture Source: @Internet
          </p>
        </div>
      </footer>
    </div>
  );
};

const TeamMember = ({ image, name, role, email, linkedin }) => {
  return (
    <div className="p-4 lg:w-1/2">
      <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
        {/* <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={image} /> */}
        <div className="flex-grow sm:pl-8">
          <h2 className="title-font font-medium text-lg text-white">{name}</h2>
          <h3 className="text-gray-500 mb-3">{role}</h3>
          <p className="mb-4">{email}</p>
          <span className="inline-flex">
            <a className="text-gray-500" href={linkedin} target="_blank" rel="noopener noreferrer">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Team;
