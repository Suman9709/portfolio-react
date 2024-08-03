import React from 'react';
import my_avtar from '../assets/my_avtar.jpg';
import Home_icon from '../assets/home.svg';
import user from '../assets/profile-logo.svg';
import resume from '../assets/resume.svg';
import portfolio from '../assets/portfolio.svg';
import blog from '../assets/blogs.svg';
import contact from '../assets/contact.svg';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import insta from '../assets/insta1.jpeg';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='fixed h-screen w-[17%] bg-black flex flex-col p-[1px]'>
      <header>
        <div className='h-[22%] w-full flex flex-col items-center'>
          <div className='relative w-full'>
            <img className='w-full h-[200px] object-cover' src={my_avtar} alt="" />
            <div className="absolute bottom-0 left-0 w-full text-white text-2xl font-bold flex items-center justify-center py-1" style={{ backgroundColor: 'rgba(0, 255, 255, 0.5)' }}>
              Suman Kumar
            </div>
          </div>
        </div>
      </header>
      <div className='h-[48%] w-full flex flex-col bg-[#2a2b30]'>
        <nav className='flex w-full mt-2'>
          <ul className='flex w-full flex-col items-start gap-[1px] bg-black'>
            <li className='flex w-full p-2 pl-8 bg-[#2a2b30]'>
              <Link to="/" className='flex flex-row items-center gap-2 text-gray-400 font-serif font-semibold text-sm hover:text-white'>
                <span className='mb-2 flex items-center justify-center'>
                  <img src={Home_icon} alt="Home Icon" className='w-4 h-4 items-center' />
                </span>
                <span className='flex items-center justify-center mb-2'>
                  HOME
                </span>
              </Link>
            </li>
            <li className='flex w-full p-2 pl-8 bg-[#2a2b30]'>
              <Link to="/about" className='flex flex-row items-center gap-2 text-gray-400 font-serif font-semibold text-sm hover:text-white'>
                <span className='mb-2 flex items-center justify-center'>
                  <img src={user} alt="About Icon" className='h-4 w-4 items-center' />
                </span>
                <span className='flex items-center justify-center mb-2'>
                  ABOUT ME
                </span>
              </Link>
            </li>
            <li className='flex w-full p-2 pl-8 bg-[#2a2b30]'>
              <Link to="/resume" className='flex flex-row items-center gap-2 text-gray-400 font-serif font-semibold text-sm hover:text-white'>
                <span className='mb-2 flex items-center justify-center'>
                  <img src={resume} alt="Resume Icon" className='w-4 h-4 items-center' />
                </span>
                <span className='flex items-center justify-center mb-2'>
                  RESUME
                </span>
              </Link>
            </li>
            <li className='flex w-full p-2 pl-8 bg-[#2a2b30]'>
              <Link to="/portfolio" className='flex flex-row items-center gap-2 text-gray-400 font-serif font-semibold text-sm hover:text-white'>
                <span className='flex items-center justify-center mb-2'>
                  <img src={portfolio} alt="Portfolio Icon" className='w-4 h-4 items-center' />
                </span>
                <span className='flex items-center justify-center mb-2'>
                  PORTFOLIO
                </span>
              </Link>
            </li>
            <li className='flex w-full p-2 pl-8 bg-[#2a2b30]'>
              <Link to="/blog" className='flex flex-row items-center justify-center gap-2 text-gray-400 font-serif font-semibold text-sm hover:text-white'>
                <span className='mb-2 flex items-center justify-center'>
                  <img src={blog} alt="Blog Icon" className='w-4 h-4' />
                </span>
                <span className='flex items-center justify-center mb-2'>
                  BLOG
                </span>
              </Link>
            </li>
            <li className='flex w-full p-2 pl-8 bg-[#2a2b30]'>
              <Link to="/contact" className='flex flex-row items-center justify-center gap-2 text-gray-400 font-serif font-semibold text-sm hover:text-white'>
                <span className='flex items-center justify-center mb-2'>
                  <img src={contact} alt="Contact Icon" className='w-4 h-4' />
                </span>
                <span className='flex items-center justify-center mb-2'>
                  CONTACT
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <footer className='h-[26%] w-full flex flex-col bg-[#2a2b30] mt-[1px] '>
        <div className='flex w-full flex-col mt-9'>
          <ul className='flex w-full flex-row gap-3 items-center justify-center p-2'>
            <li>
              <a href="https://github.com/Suman9709" target='_blank'>
                <img src={github} alt="" className='w-6 h-6 rounded-xl bg-white hover:animate-pendulum' />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/suman9709/" target='_blank'>
                <img src={linkedin} alt="" className='w-6 h-6 rounded-lg bg-white hover:animate-pendulum' />
              </a>
            </li>
            <li>
              <a href="">
                <img src={insta} alt="" className='w-6 h-6 bg-gray-400 rounded-lg hover:animate-pendulum' />
              </a>
            </li>
          </ul>
        </div>
        <div className='w-full flex flex-col justify-center items-center text-gray-400 font-serif mt-1'>
          <p>2024 © My-Portfolio</p>
          <p>All Right Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default NavBar;
