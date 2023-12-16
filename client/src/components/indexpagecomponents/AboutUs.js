import React from 'react';
import AboutUsImg from '../../assets/AboutUsImg.png';

function AboutUs() {
  return (
    <div className=' w-full my-8 flex rounded-2xl overflow-hidden text-right'>
        <div className='w-1/2 bg-blue-800 flex justify-center rounded-l-2xl'>.
            <img className=' ' src={AboutUsImg} alt='AboutUsImg' />    
        </div>
        <div className='w-1/2 bg-white text-blue-800 hover:bg-blue-800 hover:text-white m-x flex flex-col gap-5 p-10 justify-center '>
            <h3 className='text-5xl font-medium font-serif'>About Our Proctored Exam Tool</h3>
            <p className='text-2xl'>Our Proctored Exam Tool is designed to revolutionize the way institutions and organizations conduct remote examinations. With advanced monitoring and security features, we ensure the integrity of each assessment.Our user-friendly interface, real-time AI monitoring, and data privacy standards set us apart. Join the future of secure online exams.</p>
        </div>
    </div>
  )
}

export default AboutUs