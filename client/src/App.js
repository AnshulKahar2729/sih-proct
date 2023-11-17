import "./App.css";
import { Route, Routes } from "react-router-dom";
import ResultPage from "./pages/ResultPage";
import IndexPage from "./pages/IndexPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import StudentExamPage from "./pages/student/StudentExamPage";
import AddExamPage from "./pages/proctor/AddExamPage";
import ExamPage from "./pages/ExamPage";

function App() {
  return (
    <div className="App h-screen">
      <Routes>
        <Route path="/exam/:examId" element={<ExamPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/addExam" element={<AddExamPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<IndexPage />} />
      </Routes>
    </div>
  );
}

export default App;
