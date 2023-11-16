import React from "react";

function Footer() {
  return (
    <div className="w-full mt-8 flex relative" style={{backgroundColor:"#000070"}}>
      <div
        className="top-0 w-full h-56 flex justify-between text-white"
        style={{ paddingInline: "12.5%", paddingBlock: "2%" }}
      >
        <p className="text-5xl w-1/5 text-gray-300 font-serif font-normal">
          Proctpro
        </p>
        <div className="px-10 w-4/5 flex justify-around">
          <div className="w-1/3">
            <span className="text-gray-300">Contact</span>
            <div className="flex flex-col">
              <p>Email : </p>
              <p>devdynamos@proctpro.com</p>
            </div>
            <p>Please call : 8745825488</p>
            <p>for any query</p>
            <p>Available 24-7 </p>
          </div>
          <div className="w-1/3">
            <span className="text-gray-300">Others</span>
            <p>Resources</p>
            <p>Help & Support</p>
            <p>Rules & Regulations</p>
            <p>Products</p>
            <p>TeamTestimonals</p>
            <p></p>
          </div>
          <div className="w-1/3">
            <span className="text-gray-300">About</span>
            <p>
              Proctpro is an advanced platform for proctoring exams . It is
              developed in such a way that it can be integrated with different
              platforms
            </p>
          </div>
        </div>
      </div>
      <div
        className=" w-full h-min absolute bottom-0 flex justify-between items-center"
        style={{ paddingInline: "12.5%", paddingBlock: "0.5%" , backgroundColor:"#000040" }}
      >
        <div></div>
        <div className="flex gap-5">
            <img src="https://www.freeiconspng.com/uploads/hd-youtube-logo-png-transparent-background-20.png" alt="youtube-icon" className="h-8 " />
            <img src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_twitter-512.png" alt="twitter-icon" className="h-8 "/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png" alt="instagram-icon" className="h-8 "/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png" alt="facebook-icon" className="h-8 "/>
        </div>
      </div>
    </div>
  );
}

export default Footer;
