import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//importing components
import ResumeForm from "./Components/ReasumeForm";
import ProgressBar from "./Components/ProgressBar";
import EducationForm from "./Components/EducationForm";
import ExperienceForm from "./Components/ExperienceForm";
import SkillForm from "./Components/SkillForm";

//importing routes
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<ProgressBar></ProgressBar>
			<Routes>
				<Route path="/" element={<ResumeForm />}></Route>
				<Route path="/educationInfo" element={<EducationForm />}></Route>
				<Route path="/experienceInfo" element={<ExperienceForm />}></Route>
				<Route path="/skillsinfo" element={<SkillForm />}></Route>
			</Routes>
		</div>
	);
}

export default App;
