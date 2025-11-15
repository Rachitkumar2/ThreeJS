import React from 'react'
import { Link } from 'react-router-dom';
import {arrow} from '../assets/icons'

const InfoBox =({text ,link , btnText})=>(
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>

)

const renderContent={
    1 :(
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I am <span className='font-semibold'>Rachit</span>👋
            <br />
            A software Engineer from India

        </h1>
    ),
    2: (
        <InfoBox  
        text ="Hello! I’m Rachit Kumar, an aspiring Full-Stack Developer and software engineer with a strong interest in web technologies, backend systems." 
        link="/about"
        btnText="Learn more"
        />
    ),
    3: (
       <InfoBox  
        text ="Made many Projects " 
        link="/projects"
        btnText="Visit my portfolio"
        />
    ),
    4:(
        <InfoBox  
        text ="Need  project done or looking for a dev? I'm just a few keystrokes away" 
        link="/contact"
        btnText="Let's talk"
        />
    )
}


const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo
