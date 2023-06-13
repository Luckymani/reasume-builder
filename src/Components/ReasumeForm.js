import React, { useState } from "react";
import "../css/Resume.css";

const ResumeForm = () => {
	const [resumeData, setResumeData] = useState({
		name: "",
		email: "",
		address: "",
		phone: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setResumeData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div className="container">
			<h1 className="my-4">Resume Form</h1>
			<form onSubmit={handleSubmit} className="form">
				<div className="form-group">
					<label htmlFor="name">Name</label>
					<input type="text" id="name" className="form-control" name="name" value={resumeData.name} onChange={handleChange} required />
				</div>
				<div className="form-group">
					<label htmlFor="email">Email</label>
					<input type="email" id="email" className="form-control" name="email" value={resumeData.email} onChange={handleChange} required />
				</div>
				<div className="form-group">
					<label htmlFor="address">Address</label>
					<input type="text" id="address" className="form-control" name="address" value={resumeData.address} onChange={handleChange} required />
				</div>
				<div className="form-group">
					<label htmlFor="phone">Phone</label>
					<input type="tel" id="phone" className="form-control" name="phone" value={resumeData.phone} onChange={handleChange} required maxLength={10} minLength={10} />
				</div>
				<button type="submit" className="btn btn-primary">
					next
				</button>
			</form>
		</div>
	);
};

export default ResumeForm;
