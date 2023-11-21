import React from 'react';
import { FaMobileScreen } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import ContactUsImg from "../../assets/ContactUsImg.png";

function ContactUs() {
  return (
    <div className='flex rounded-md overflow-hidden  my-8'>
      <div className='bg-gray-200 relative' style={{width:"45%",}}>
        <div className='z-10 absolute text-blue-900  font-semibold p-10 grid gap-8' style={{}} >
          <div className='w-full h-full' style={{}}></div>
          <h3 className='text-6xl font-serif font-semibold'>Get in Touch</h3>
          <p className='text-2xl font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p className='text-2xl font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className='grid gap-3'>
              <p className='flex items-center gap-2 text-md'><FaMobileScreen />  <p>+91 981258258</p></p>
              <p className='flex items-center gap-2 text-md'><MdEmail />   <p>devdynamos1@gmail.com</p></p>
          </div>
        </div>
        <img className='z-0 w-full h-full' style={{backgroundSize: "contain",backgroundRepeat: "no-repeat",backgroundPosition:"center",filter: "blur(8px)" ,}} src={ContactUsImg} alt="signUpImg"></img>
      </div>


      <div className='bg-blue-800 p-10 ' style={{width:"55%",}}>
        <form className='grid gap-7'>
          <input className='contactUsInput' type='text' placeholder='Enter Full Name'/>
          <input className='contactUsInput' type='tel' placeholder='Enter Mobile Number'/>
          <input className='contactUsInput' type='email' placeholder='Enter Email Address'/>
          <div className='contactUsInput flex gap-4 bg-white'>
            <label className='text-gray-400'>Profession</label>
            <select className='border border-gray-400 text-gray-400  text-center bg-white rounded-md'>
              <option className=''>Proctor</option>
              <option className=''>Student</option>
            </select>
          </div>
          <textarea className='contactUsInput text-gray-400' id=""  rows="5" cols="33">Enter Your Message</textarea>
          <input className='bg-white px-3 py-2 w-fit font-medium font-serif text-blue-700 rounded-md hover:bg-blue-700 hover:text-white' type='submit' />
        </form>
      </div>
    </div>
  )
}

export default ContactUs