import React from "react";
import SchoolImg from "../../assets/SchoolImg.png";
import CollegeImg from "../../assets/CollegeImg.png";
import InstitutionImg from "../../assets/InstitutionImg.png";

function Benefits() {
  return (
    <div className="w-full h-full" style={{backgroundColor:"#ffff" ,padding:"2% 2.5%"}}>
      <p className="text-black text-6xl font-serif text-center mb-8">
        Benfits of using ProctPro
      </p>
      <div className="w-full flex gap-5 items-center justify-center">
        <div className="flex gap-4">
            <div className="bg-benefitCardBgColor transition-all w-1/3 flex flex-col p-8 rounded-2xl text-center text-white hover:shadow-black hover:shadow-md hover:bg-white hover:text-black" >
                <img className="h-32 w-32 rounded-full bg-white mx-auto shadow-white shadow-md border-white border" src={SchoolImg} alt="schoolImg"/>         
                <p className="my-5 text-4xl font-serif">School</p>
                <p className=''>Schools can use our Proctored Exam Tool to conduct secure and monitored assessments for students. Whether it's regular class exams, standardized testing, or entrance examinations, our tool ensures fairness and integrity.</p>
            </div>          
            <div className="bg-benefitCardBgColor w-1/3 flex flex-col p-8 rounded-2xl text-center text-white hover:shadow-black hover:shadow-md hover:bg-white hover:text-black" >
                <img className="h-32 w-32 rounded-full bg-white mx-auto shadow-white shadow-md border-white border" src={CollegeImg} alt="collegeImg"/>  
                <p className="my-5 text-4xl font-serif">College</p>
                <p className=''>Higher education institutions can benefit from our platform to administer online exams for a variety of courses and programs. From midterms to final assessments, our secure environment guarantees the credibility of results.</p>
            </div>          
            <div className="bg-benefitCardBgColor w-1/3 flex flex-col p-8 rounded-2xl text-center text-white hover:shadow-black hover:shadow-md hover:bg-white hover:text-black" >
                <img className="h-32 w-32 rounded-full bg-white mx-auto shadow-white shadow-md border-white border" src={InstitutionImg} alt="institutionImg"/>        
                <p className="my-5 text-4xl font-serif">Institutions</p>
                <p className=''>Professional training institutes and certification bodies can rely on our Proctored Exam Tool to verify the skills and knowledge of candidates. Our advanced monitoring features make certification exams trustworthy.</p>
            </div>          
        </div>
      </div>
      
    </div>
  );
}

export default Benefits;
