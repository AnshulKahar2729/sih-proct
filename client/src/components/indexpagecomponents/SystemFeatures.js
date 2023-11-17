import React from 'react';
import SystemImg from '../../assets/SystemFeaturesImg.png'

function SystemFeatures() {
  return (
    <div className='bg-benefitCardBgColor text-white rounded-2xl overflow-hidden p-5 hover:bg-white hover:text-black hover:shadow-md transition-all hover:shadow-black'>


        <div className='flex flex-col text-center gap-3 mb-3 '>
          <div className='text-6xl font-serif'>System Features</div>
          <div className='text-2xl'>Quality and innovation in proctoring are our top priorities.<br/>We offer the best solutions quickly.</div>
        </div>



        <div className='flex gap-2 w-full justify-center align-middle '>

          <div className='w-1/3 flex flex-col justify-between gap-3 p-8'>
            <div className='flex text-right hover:text-blue-800 '>
              <p className='text-xl'><b className="text-2xl">Scoring</b><br/> Automatic assessment of confidence in test results and biometric verification of identity.</p>
              <div className='ml-2'><svg className='h-8' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" /></svg></div>
              </div>
            <div className='flex text-right hover:text-blue-800 '>
              <p className='text-xl'><b className="text-2xl">Security</b><br/>Real-time AI-based facial recognition for enhanced security.</p>
              <div className='ml-2'><svg className='h-8' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg></div>
            </div>
          </div>


          <div className='w-1/3 grid items-center '>
            <img className='w-auto' src={SystemImg} alt='systemImage'></img>
          </div>
          

          <div className='w-1/3 flex flex-col justify-between p-8 '>
            <div className='flex hover:text-blue-800 '>
              <div className='mr-2'><svg className='h-8' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" ><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg></div>
              <div className='text-xl'><b className="text-2xl">Support</b><br/> Dedicated support for a smooth and worry-free experience</div>
            </div>
            <div className='flex hover:text-blue-800 '>
              <div  className='mr-2'><svg className='h-8' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" ><path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" /></svg></div>
              <p className='text-xl'><b className="text-2xl">Integration</b><br/> Seamless integration with various assessment platforms.</p>
            </div>
          </div>

        </div>
    </div>
  )
}

export default SystemFeatures