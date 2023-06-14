import React, { useContext, useState, useEffect } from "react";
import "../css/Resume.css";
import { userContext } from "../App";
import { useNavigate } from "react-router-dom";

const ResumeForm = () => {
	const navigate = useNavigate();
	const [resumeData, setResumeData] = useState({
		username: "",
		email: "",
		address: "",
		phone: "",
	});

	const { userData, setUserData } = useContext(userContext);

	useEffect(() => {
		if (username === "" && email === "" && address === "" && phone === "") {
			setResumeData({ username: userData.username, email: userData.email, address: userData.address, phone: userData.phone });
		}
	}, []);
	// console.log(userData, setUserData);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setResumeData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const { username, email, address, phone } = resumeData;
	const handleSubmit = (e) => {
		e.preventDefault();
		setUserData({ ...userData, username, email, address, phone });
		navigate("/educationinfo");
	};
	console.log(userData);

	return (
		<div className="container profile">
			<h1 className="my-4">Personal Info</h1>
			<form onSubmit={handleSubmit} className="form d-flex ">
				<div className="form-group">
					<label htmlFor="username">Name</label>
					<input type="usertext" id="username" className="form-control" name="username" value={resumeData.username} onChange={handleChange} required />
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
