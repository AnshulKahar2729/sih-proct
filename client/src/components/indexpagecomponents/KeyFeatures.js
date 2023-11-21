import React from 'react';
import KeyFeaturesImg from '../../assets/KeyFeaturesImg.png';

function KeyFeatures() {
  return (
    <div className=' w-full my-8 flex rounded-2xl overflow-hidden gap-1'>
        <div className='w-1/2 bg-white text-blue-800 hover:bg-blue-800 hover:text-white m-x flex flex-col gap-4 p-10 justify-center '>
            <h3 className='text-5xl font-medium font-serif'>Key Features</h3>
            <p className='flex flex-col gap-3'>
                <p><b className='text-2xl'>Remote Monitoring : </b>Proctors can remotely observe exam-takers through webcam and screen sharing.</p> 
                <p><b className='text-2xl'>Identity Verification : </b>Robust identity verification mechanisms prevent impersonation and fraud.</p> 
                <p><b className='text-2xl'>Cheating Prevention : </b>AI-based facial recognition, eye tracking, and behavior analysis flag potential cheating.</p> 
                <p><b className='text-2xl'>Secure Environment : </b>Unauthorized resources are disabled during exams.</p> 
                <p><b className='text-2xl'>Data Privacy : </b>Stringent data privacy and security standards protect sensitive information.</p> 
            </p>
        </div>
        <div className='w-1/2 bg-blue-800 flex justify-center rounded-r-2xl'>.
            <img className=' ' src={KeyFeaturesImg} alt='KeyFeaturesImg' />    
        </div>
    </div>
  )
}

export default KeyFeatures