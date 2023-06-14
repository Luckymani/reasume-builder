import React, { useState, useEffect } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//importing components
import ResumeForm from "./Components/ReasumeForm";
import ProgressBar from "./Components/ProgressBar";
import EducationForm from "./Components/EducationForm";
import ExperienceForm from "./Components/ExperienceForm";
import SkillForm from "./Components/SkillForm";

//importing routes
import { Routes, Route, useNavigate } from "react-router-dom";
import GenerateResume from "./Components/GenerateResume";

export const userContext = React.createContext();

function App() {
	const navigate = useNavigate();
	const [userData, setUserData] = useState({ username: "", address: "", email: "", phone: "", educationDetails: [{ institute: "", startYear: "", endYear: "", designation: "", percentage: "" }], experienceDetails: [{ company: "", startYear: "", endYear: "", role: "" }], tags: [] });

	useEffect(() => {
		navigate("/personalinfo");
	}, []);
	return (
		<div className="App">
			<ProgressBar></ProgressBar>
			<userContext.Provider value={{ userData, setUserData }}>
				<Routes>
					<Route path="/personalinfo" element={<ResumeForm />}></Route>
					<Route path="/educationInfo" element={<EducationForm />}></Route>
					<Route path="/experienceInfo" element={<ExperienceForm />}></Route>
					<Route path="/skillsinfo" element={<SkillForm />}></Route>
					<Route path="/generateresume" element={<GenerateResume />}></Route>
				</Routes>
			</userContext.Provider>
		</div>
	);
}

export default App;
