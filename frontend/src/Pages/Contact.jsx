import React from 'react';
import soumyajitImage from '../Components/Assets/Soumyajit.png';
import anirudhImage from '../Components/Assets/Anirudh.png';
import srijanImage from '../Components/Assets/Srijan.png';
import ishitaImage from '../Components/Assets/Ishita.png';

const Team = () => {
  return (
    <div>
      {/* TEAMMATES */}
      <section className="text-gray-400 bg-gray-900 body-font" style={{background: "linear-gradient(180deg, #7fbf7f, #e1ffea22 60%)"}}>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-2xl font-medium title-font mb-4 text-black tracking-widest" >OUR TEAM</h1>
          </div>
          <div className="flex flex-wrap -m-4">
          <TeamMember
              image={ishitaImage}
              name="Ishita Ghosh"
              role="Website Developer"
              email="ishitaghosh200352@gmail.com"
              linkedin="https://www.linkedin.com/in/ishita-ghosh-753301214/"
            />
            <TeamMember
              image={soumyajitImage}
              name="Soumyajit Nag"
              role="Website Developer"
              email="soumyajitnag18@gmail.com"
              linkedin="https://www.linkedin.com/in/soumyajitnag1803/"
            />
            <TeamMember
              image={srijanImage}
              name="Srijan Singh"
              role="Website Developer"
              email="srijan32002@gmail.com"
              linkedin="https://www.linkedin.com/in/srijan-singh-556362260/"
            />
            <TeamMember
              image={anirudhImage}
              name="Anirudh Jalan"
              role="Website Developer"
              email="anirudhjalan2001@gmail.com"
              linkedin="https://www.linkedin.com/in/anirudh-jalan1/"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const TeamMember = ({ image, name, role, email, linkedin }) => {
  return (
    <div className="p-4 lg:w-1/2">
      <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
        <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" style={{width:"20%"}} src={image} />
        <div className="flex-grow sm:pl-8">
          <h3 className="title-font font-medium text-lg text-black">{name}</h3>
          <h5 className="text-gray-500 mb-3">{role}</h5>
          <p className="mb-4">{email}</p>
          <span className="inline-flex">
            <a className="text-gray-500" href={linkedin} target="_blank" rel="noopener noreferrer">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24" style={{width:"5%"}}>
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
