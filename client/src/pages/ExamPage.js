import React, { useContext } from 'react'
import { UserContext } from '../context/UserContextProvider'
import ProctorExamPage from './proctor/ProctorExamPage';
import StudentExamPage from './student/StudentExamPage';

const ExamPage = () => {

    const {user} = useContext(UserContext);

  return (
    <div>
      {user?.role === "proctor" ? (<ProctorExamPage/>) : null}
      {user?.role === "student" ? (<StudentExamPage/>) : null}
    </div>
  )
}

export default ExamPage
