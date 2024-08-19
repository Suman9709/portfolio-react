import React from 'react'
import { FaRegAddressCard } from "react-icons/fa";
import Skill from '../components/Skill'
import ProjectCard from './ProjectCard';
import currencyChanger from "../assets/currency.png"
import weather from "../assets/weather.png"
import quiz from "../assets/quiz.png"
import tictac from "../assets/tictac.png"

const Resume = () => {
  return (

    <div className='px-24 py-16 flex flex-col'>
      <div className='flex flex-row items-center justify-between'>
        <h1 className='text-blue-500 text-4xl font-semibold font-sans'>My Resume.</h1>
        <FaRegAddressCard className='text-blue-500 text-4xl' />
      </div>
      <hr className='border-blue-600 my-2 border-dashed' />

      <div className='mt-16 w-full flex justify-center items-center'>
        <div className="relative flex items-center">
          <h3 className="relative px-4 text-center text-black text-2xl font-semibold">
            EDUCATION
            <span className="absolute bottom-0 left-0 h-[5px] w-[2px] bg-[#00A3E1]"></span>
            <span className="absolute bottom-0 right-0 h-[5px] w-[2px] bg-[#00A3E1]"></span>
            <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#00A3E1]"></span>
          </h3>
        </div>
      </div>

      <div >
        <div className='mt-12'>
          <h1 className='font-semibold'>GRADUATION</h1>
          <hr className='border-blue-600 my-2 border-dashed' />
          <div className='flex justify-between font-semibold'>
            <h2>SHIVALIK COLLEGE OF ENGINEERING DEHRADUN UTTRAKHAND</h2>
            <h2>2022-2026</h2>
          </div>
          <p className='italic'>Bachelor of Technology in Computer Science & Engineering</p>
          <p className='italic'>Specilization in Data Science</p>
        </div>
      </div>
      <Skill />
      <div>
        <div className='mt-32 w-full flex justify-center items-center'>
          <div className="relative flex items-center">
            <h3 className="relative px-4 text-center text-black text-2xl font-semibold">
              PROJECTS
              <span className="absolute bottom-0 left-0 h-[5px] w-[2px] bg-[#00A3E1]"></span>
              <span className="absolute bottom-0 right-0 h-[5px] w-[2px] bg-[#00A3E1]"></span>
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#00A3E1]"></span>
            </h3>
          </div>
        </div>





        <div className='mt-12 flex flex-row gap-4'>


          <ProjectCard
            title="CURRENCY CONVERTER"
            description="Here is a currency converter app which can help to find the present value of any country currency and compare it."
            image={currencyChanger}
          />



          <ProjectCard
            title="WEATHER APP"
            description="Here is a currency converter app which can help to find the present value of any country currency and compare it."
            image={weather}
          />


          <ProjectCard
            title="QUIZ APP"
            description="Here is a Quiz App this gives you 10 questions and show the total score and also show the corrrect answer."
            image={quiz}
            visit={"https://quiz-react-app-silk.vercel.app/"}
          />


          {/* <ProjectCard
            title="TIC-TAC-TOE"
            description=" Here is a game app in this we can play and also have reset button."
            image={tictac}
          /> */}
        </div>
      </div>



    </div>
  )
}

export default Resume
