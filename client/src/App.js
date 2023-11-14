import "./App.css";
import { Route, Routes } from "react-router-dom";
import StudentExamPage from "./pages/StudentExamPage";
import ResultPage from "./pages/ResultPage";
import AddExamPage from "./pages/AddExamPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/exam/:examId" element={<StudentExamPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/addExam" element={<AddExamPage />} />
      </Routes>
    </div>
  );
}

export default App;
