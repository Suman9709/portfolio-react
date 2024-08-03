import React from 'react';
import mainpage from '../assets/heropage.jpeg';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const HeroPage = () => {
  const [text] = useTypewriter({
    words: ["Mern Stack Developer", "Graphic Designer", "Photographer"],
    loop: true,
    typeSpeed: 60,  
    deleteSpeed: 60,  
    delaySpeed: 1500, 
  });

  return (
    <div className='w-full h-screen relative'>
      <img className='w-full h-full object-cover' src={mainpage} alt="" />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className='text-white text-5xl font-bold'>
          SUMAN <span className='text-cyan-400 italic'>KUMAR</span>
        </h1>
        <div className='text-white text-2xl font-semi-bold font-serif mt-2 inline-block'>
          <h3 className='transition-opacity duration-500 opacity-100'>
            I am a {' '}
            <span className='underline decoration-cyan-400'>
              {text}
              <Cursor />
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
