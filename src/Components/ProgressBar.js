import React from "react";
import "../css/ProgressBar.css";
import { useNavigate } from "react-router-dom";

function ProgressBar() {
	const navigate = useNavigate();

	return (
		<div className="container progress-container">
			<h1 className="mb-4">Build Your Resume</h1>
			<div className="d-flex justify-content-between mt-4">
				<div className="progress">
					<div className="progress-bar bg-primary"></div>
				</div>
				<div className="text-center" onClick={() => navigate("/personalinfo")}>
					<div className="bg-primary rounded-circle p-3 text-white">step 1</div>
					<p className="mt-2">Personal Info</p>
				</div>
				<div className="text-center" onClick={() => navigate("/educationInfo")}>
					<div className="bg-primary rounded-circle p-3 text-white"> step 2</div>
					<p className="mt-2">Education</p>
				</div>
				<div className="text-center" onClick={() => navigate("/experienceinfo")}>
					<div className="bg-primary rounded-circle p-3 text-white">step 3</div>
					<p className="mt-2">Experience</p>
				</div>
				<div className="text-center" onClick={() => navigate("/skillsinfo")}>
					<div className="bg-primary rounded-circle p-3 text-white">step 4</div>
					<p className="mt-2">skills</p>
				</div>
			</div>
		</div>
	);
}

export default ProgressBar;
