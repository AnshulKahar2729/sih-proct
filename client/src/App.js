import './App.css';
import {Route, Routes} from "react-router-dom";
import StudentExamPage from './components/StudentExamPage';
import ResultPage from './components/ResultPage';

function App() {
  return (
    <div className="App h-screen">
      <Routes>
        <Route path='/exam/:examId' element={<StudentExamPage/>}/>
        <Route path='/result' element={<ResultPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
