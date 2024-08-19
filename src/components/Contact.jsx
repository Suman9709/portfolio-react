import React from 'react'
import contact from '../assets/envelop.png'
import phone from '../assets/phone.png'
import gmail from '../assets/gmail.png'

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "f96f6840-61ce-40dd-82ad-62d4c9068c9f");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      event.target.reset();
    }
  };

  return (
    <div className='px-24 py-16 flex flex-col '>
      <div className='flex flex-row justify-between'>
        <h1 className='text-blue-500 text-3xl font-semibold font-sans'>Contact Me.</h1>
        <img className='h-12 w-12' src={contact} alt="" />
      </div>
      <hr className='border-blue-600 my-1 border-dashed' />



      <div className='flex flex-col items-center justify-center  gap-2'>
        <div className='mt-12 w-full flex justify-center items-center'>
          <div className="relative flex items-center">
            <h3 className="relative px-4 text-center text-black text-2xl font-semibold">
              Let's Talk
              <span className="absolute bottom-0 left-0 h-[5px] w-[2px] bg-[#00A3E1]"></span>
              <span className="absolute bottom-0 right-0 h-[5px] w-[2px] bg-[#00A3E1]"></span>
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#00A3E1]"></span>
            </h3>
          </div>
        </div>
        <div className='flex items-center'>
          <form  onSubmit={onSubmit}>
            <div className='flex flex-row mt-12 justify-between items-center gap-20'>
              <div className='relative'>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder=' '
                  className='border-[999999] border-2 w-[250px] h-10 text-lg text-black p-2 peer'
                />
                <label
                  htmlFor="name"
                  className='absolute left-3 -top-7 text-black text-sm font-semibold transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-[555555] peer-focus:-top-5 peer-focus:text-sm peer-focus:text-black'
                >
                  Name
                </label>
              </div>
              <div className='relative'>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder=' '
                  className='border-[999999] border-2 w-[250px] h-10 text-lg text-black p-2 peer'
                />
                <label
                  htmlFor="email"
                  className='absolute left-2 -top-7 text-black text-sm font-semibold transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-[555555] peer-focus:-top-5 peer-focus:text-sm peer-focus:text-black'
                >
                  Email
                </label>
              </div>
            </div>
            <div className='relative mt-10'>
              <textarea
                name="text"
                id="text"
                placeholder=' '
                cols={80}
                rows={7}
                className='border-[999999] border-2 w-full text-lg text-black p-2 peer'
              />
              <label
                htmlFor="text"
                className='absolute left-2 -top-7 text-black text-sm font-semibold transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-[555555] peer-focus:-top-5 peer-focus:text-sm peer-focus:text-black'
              >
                How Can I Help You?
              </label>
            </div>
            <div className='mt-4 items-center flex justify-center'>
              <button
                className="h-10 px-4 text-lg font-semibold rounded-md text-cyan-400 border-2 border-solid border-cyan-400 hover:bg-cyan-400 hover:text-white transition-colors duration-300"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

      </div>


      <div className='flex flex-row justify-around mt-8 p-4'>
        <div className=' flex flex-row gap-1 items-center'  >
          <img className='w-8 h-8' src={phone} alt="" />
          <h3 className='text-lg'>+91 7488788522</h3>
        </div>
        <div className='flex flex-row gap-1 items-center'>
          <img className='w-8 h-8' src={gmail} alt="" />
          <h3 className='text-xl'>suman.k9709@gmail.com</h3>
        </div>
      </div>
    </div>
  )
}

export default Contact
