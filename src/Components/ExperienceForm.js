import React, { useState, useEffect, useContext } from "react";
import "../css/Education.css";
import { userContext } from "../App";
import { useNavigate } from "react-router-dom";

const ExperienceForm = () => {
	const [experienceDetails, setexperienceDetails] = useState([{ company: "", startYear: "", endYear: "", role: "" }]);
	const navigate = useNavigate();
	const currentYear = new Date().getFullYear();
	// const currentYear = 2024;
	const years = Array.from(new Array(currentYear - 1960 + 4), (_, index) => 1960 + index);

	const { userData, setUserData } = useContext(userContext);

	useEffect(() => {
		if (experienceDetails[0].company === "") {
			setexperienceDetails(userData.experienceDetails);
		}
	}, []);
	const handleInputChange = (index, e) => {
		const { name, value } = e.target;
		const updatedexperienceDetails = [...experienceDetails];
		updatedexperienceDetails[index][name] = value;
		setexperienceDetails(updatedexperienceDetails);
	};

	const handleAddFields = () => {
		setexperienceDetails([...experienceDetails, { company: "", startYear: "", endYear: "", role: "" }]);
	};

	const handleRemoveFields = (index) => {
		const updatedexperienceDetails = [...experienceDetails];
		updatedexperienceDetails.splice(index, 1);
		setexperienceDetails(updatedexperienceDetails);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setexperienceDetails(userData.experienceDetails);
		setUserData({ ...userData, experienceDetails: experienceDetails });
		navigate("/skillsinfo");
	};

	return (
		<div className="container">
			<h1>Experience info</h1>
			<form onSubmit={handleSubmit}>
				{experienceDetails.map((experience, index) => (
					<div key={index} className="card mb-3">
						<div className="card-body">
							<div className="form-group">
								<label htmlFor={`company${index}`}>company</label>
								<input type="text" id={`company${index}`} className="form-control" name="company" value={experience.company} onChange={(e) => handleInputChange(index, e)} required />
							</div>
							<div className="p-y-wrapper d-flex justify-content-between" style={{ width: "140px" }}>
								<div className="form-group">
									<label htmlFor={`startYear${index}`}>From</label>
									{/* <input type="text" id={`startYear${index}`} className="form-control" name="startYear" value={experience.startYear} onChange={(e) => handleInputChange(index, e)} required /> */}
									<select id={`startYear${index}`} className="form-control" name="startYear" value={experience.startYear} onChange={(e) => handleInputChange(index, e)} required>
										<option value="">Select Year</option>
										{years.map((year) => (
											<option key={year} value={year}>
												{year}
											</option>
										))}
									</select>
								</div>
								<div className="form-group">
									<label htmlFor={`endYear${index}`}>To</label>
									<select id={`endYear${index}`} className="form-control" name="endYear" value={experience.startYear} onChange={(e) => handleInputChange(index, e)} required>
										<option value="">Select Year</option>
										{years.map((year) => (
											<option key={year} value={year}>
												{year}
											</option>
										))}
									</select>
									{/* <input type="text" id={`endYear${index}`} className="form-control" name="endYear" value={experience.endYear} onChange={(e) => handleInputChange(index, e)} required /> */}
								</div>
							</div>
							<div className="form-group">
								<label htmlFor={`role${index}`}>role</label>
								<input type="text" id={`role${index}`} className="form-control" name="role" value={experience.role} onChange={(e) => handleInputChange(index, e)} required />
							</div>
							{index !== 0 && (
								<button type="button" className="btn btn-danger" onClick={() => handleRemoveFields(index)}>
									Remove
								</button>
							)}
						</div>
					</div>
				))}
				<button type="button" className="btn btn-primary mb-3" onClick={handleAddFields}>
					Add More
				</button>
				<button type="submit" className="btn btn-primary mb-3">
					Submit
				</button>
			</form>
		</div>
	);
};

export default ExperienceForm;
