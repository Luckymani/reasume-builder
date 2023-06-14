import React, { useState, useContext, useEffect } from "react";
import "../css/Education.css";
import { userContext } from "../App";
import { useNavigate } from "react-router-dom";

const EducationForm = () => {
	const [educationDetails, setEducationDetails] = useState([{ institute: "", startYear: "", endYear: "", designation: "", percentage: "" }]);
	const navigate = useNavigate();

	const currentYear = new Date().getFullYear();
	// const currentYear = 2024;
	const years = Array.from(new Array(currentYear - 1960 + 4), (_, index) => 1960 + index);

	const { userData, setUserData } = useContext(userContext);

	useEffect(() => {
		if (educationDetails[0].institute === "") {
			setEducationDetails(userData.educationDetails);
		}
	}, []);

	const handleInputChange = (index, e) => {
		const { name, value } = e.target;
		const updatedEducationDetails = [...educationDetails];
		updatedEducationDetails[index][name] = value;
		setEducationDetails(updatedEducationDetails);
	};

	const handleAddFields = () => {
		setEducationDetails([...educationDetails, { institute: "", startYear: "", endYear: "", designation: "", percentage: "" }]);
	};

	const handleRemoveFields = (index) => {
		const updatedEducationDetails = [...educationDetails];
		updatedEducationDetails.splice(index, 1);
		setEducationDetails(updatedEducationDetails);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setUserData({ ...userData, educationDetails: educationDetails });
		navigate("/experienceInfo");
	};

	return (
		<div className="container">
			<h1>Education info</h1>
			<form onSubmit={handleSubmit}>
				{educationDetails.map((education, index) => (
					<div key={index} className="card mb-3">
						<div className="card-body">
							<div className="form-group">
								<label htmlFor={`institute${index}`}>institute</label>
								<input type="text" id={`institute${index}`} className="form-control" name="institute" value={education.institute} onChange={(e) => handleInputChange(index, e)} required />
							</div>
							<div className="p-y-wrapper d-flex justify-content-between">
								<div className="form-group">
									<label htmlFor={`startYear${index}`}>From</label>
									<select id={`startYear${index}`} className="form-control" name="startYear" value={education.startYear} onChange={(e) => handleInputChange(index, e)} required>
										<option value="">Select Year</option>
										{years.map((year) => (
											<option key={year} value={year}>
												{year}
											</option>
										))}
									</select>
								</div>
								<div className="form-group" style={{ marginRight: "10px" }}>
									<label htmlFor={`endYear${index}`}>To</label>
									<select id={`endYear${index}`} className="form-control" name="endYear" value={education.endYear} onChange={(e) => handleInputChange(index, e)} required>
										<option value="">Select Year</option>
										{years.map((year) => (
											<option key={year} value={year}>
												{year}
											</option>
										))}
									</select>
								</div>
								<div className="form-group">
									<label htmlFor={`percentage${index}`}>Percentage</label>
									<input type="number" id={`percentage${index}`} className="form-control" name="percentage" value={education.percentage} onChange={(e) => handleInputChange(index, e)} required />
								</div>
							</div>
							<div className="form-group">
								<label htmlFor={`designation${index}`}>Designation/Degree</label>
								<input type="text" id={`designation${index}`} className="form-control" name="designation" value={education.designation} onChange={(e) => handleInputChange(index, e)} required />
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

export default EducationForm;
