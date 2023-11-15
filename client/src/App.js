import "./App.css";
import { Route, Routes } from "react-router-dom";
import StudentExamPage from "./pages/StudentExamPage";
import ResultPage from "./pages/ResultPage";
import AddExamPage from "./pages/AddExamPage";
import IndexPage from "./pages/IndexPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div className="App h-screen">
      <Routes>
        <Route path="/exam/:examId" element={<StudentExamPage />} />
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
