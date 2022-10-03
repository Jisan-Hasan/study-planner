import "./App.css";
import QuestionAnswer from "./components/QuestionAnswer/QuestionAnswer";
import StudyPlanner from "./components/StudyPlanner/StudyPlanner";

function App() {
  return (
    <div className="App">
      <StudyPlanner></StudyPlanner>
      <QuestionAnswer></QuestionAnswer>
    </div>
  );
}

export default App;
