import React from 'react'
import userblue from '../assets/userblue.png'
import laptop from '../assets/laptop.png'
import eye from '../assets/eye.png'
import camera from '../assets/camera.png'
const About = () => {
    return (
        <div className='px-24 py-16 flex flex-col'>
            <div className='flex flex-row justify-between'>
                <h1 className='text-blue-500 text-3xl font-semibold font-sans'>About Me.</h1>
                <img className='h-12 w-12' src={userblue} alt="" />

            </div>
            <hr className='border-blue-600 my-1 border-dashed' />

            <div className=' pt-12 flex flex-row '>
                <div className=' border-black  flex flex-row gap-4'>
                    <div className='w-2/3 pr-4'>
                        <h2 className='text-2xl font-semibold'>Mern Stack Developer</h2>
                        <div className='pt-6 text-lg'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque tempora obcaecati, sint ipsum modi adipisci repudiandae officiis blanditiis quasi dolore reiciendis veniam optio. Quo recusandae autem, culpa, tempora in praesentium accusantium nam iusto, repudiandae saepe ipsam at sequi nobis deserunt modi sapiente obcaecati beatae doloribus nemo voluptatem illo explicabo qui.</p>
                        </div>
                    </div>
                    <div >
                        <h1 className='font-semibold text-2xl'>Personal Infromation</h1>
                        <div className='mt-4 p-2  '>
                            <p className='font-semibold text-lg'>Name: <span className='font-normal'>Suman Kumar</span> </p>
                            <p className='font-semibold text-lg'>Age: <span className='font-normal'>21 Years</span> </p>
                            <p className='font-semibold text-lg'>Email: <span className='font-normal'>suman.k9709@gmail.com</span> </p>
                            <p className='font-semibold text-lg'>Contact: <span className='font-normal'>7488788522</span> </p>
                            <p className='font-semibold text-lg'>Address: <span className='font-normal'>Dehradun Uttrakhand</span> </p>
                        </div>
                        <div className='mt-4'>
                            <button class="h-10 px-4 text-lg font-semibold rounded-md text-cyan-400 border-2 border-solid border-cyan-400 hover:bg-cyan-400 hover:text-white transition-colors duration-300" type="submit">
                                Resume Download
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            <div className='mt-20 w-full flex justify-center items-center'>
                <div className="relative flex items-center">
                    <h3 className="relative px-4 text-center text-black text-2xl font-semibold">
                        SERVICES
                        <span className="absolute bottom-0 left-0 h-[5px] w-[2px] bg-[#00A3E1]"></span>
                        <span className="absolute bottom-0 right-0 h-[5px] w-[2px] bg-[#00A3E1]"></span>
                        <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#00A3E1]"></span>
                    </h3>
                </div>
            </div>


            <div className='w-full flex flex-row items-center mt-8  gap-2'>
                <div className='p-2 items-center flex flex-col'>
                    <div>
                        <img className='w-20 h-20' src={laptop} alt="" />
                    </div>
                    <div className='text-black text-xl font-sans font-semibold pt-2'>
                        <h1>Web Development</h1>
                    </div>
                    <div className='pt-2 font-sans'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sint natus dolorem eius et incidunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, mollitia.

                    </div>
                </div>


                
           
                <div className='p-2 items-center flex flex-col'>
                    <div>
                        <img className='w-20 h-20' src={eye} alt="" />
                    </div>
                    <div className='text-black text-xl font-sans font-semibold pt-2'>
                        <h1>Graphic Designer</h1>
                    </div>
                    <div className='pt-2 font-sans'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sint natus dolorem eius et incidunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, mollitia.

                    </div>
                </div>

                <div className='p-2 items-center justify-center flex flex-col'>
                    <div>
                        <img className='w-20 h-20' src={camera} alt="" />
                    </div>
                    <div className='text-black text-xl font-sans font-semibold pt-2'>
                        <h1>Photographer</h1>
                    </div>
                    <div className='pt-2 font-sans'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sint natus dolorem eius et incidunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, mollitia.

                    </div>
                </div>
            </div>




        </div>
    )
}

export default About
