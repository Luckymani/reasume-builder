import React, { useRef, useContext, useEffect } from "react";
import jsPDF from "jspdf";
import { userContext } from "../App";

function GenerateResume() {
	const previewRef = useRef(null);
	const { userData } = useContext(userContext);

	useEffect(() => {
		generatePreview();
	}, [userData]);

	const generatePDF = () => {
		const doc = new jsPDF();

		doc.setFontSize(20);
		doc.setFont("Courier New", "bold");
		doc.text("Resume", 15, 15);

		doc.setFontSize(18);
		doc.setFont("Courier New", "bold");
		doc.text(`Name: ${userData.username}`, 15, 30);

		doc.setFontSize(12);
		doc.setFont("Courier New", "normal");
		doc.text(`Email: ${userData.email}`, 15, 40);
		doc.text(`Address: ${userData.address}`, 15, 50);
		doc.text(`Phone: ${userData.phone}`, 15, 60);

		doc.setFontSize(16);
		doc.setFont("Courier New", "bold");
		doc.text("Education", 15, 75);

		doc.setFontSize(12);
		doc.setFont("Courier New", "normal");
		userData.educationDetails.forEach((education, index) => {
			const { institute, startYear, endYear, designation, percentage } = education;
			doc.text(`Institute:${institute}, Year:${startYear}-${endYear}, Degree: ${designation}, percentage:${percentage}`, 25, 85 + index * 10);
		});

		doc.setFontSize(16);
		doc.setFont("Courier New", "bold");
		doc.text("Experience", 15, 90 + userData.educationDetails.length * 10);
		doc.setFontSize(12);
		doc.setFont("calibri", "normal");
		userData.experienceDetails.forEach((experience, index) => {
			const { company, startYear, endYear, role } = experience;
			doc.text(`Company:${company}, Year: ${startYear}-${endYear}, Role: ${role}`, 25, 100 + userData.educationDetails.length * 10 + index * 10);
		});

		doc.setFontSize(16);
		doc.setFont("Courier New", "bold");
		doc.text("Skills", 15, 105 + userData.experienceDetails.length * 10 + userData.educationDetails.length * 10);

		doc.setFontSize(12);
		doc.setFont("Courier New", "normal");
		doc.setFontSize(10);
		userData.tags.forEach((skill, index) => {
			doc.text(`${index + 1}. ${skill.text}`, 25, 115 + userData.experienceDetails.length * 10 + userData.educationDetails.length * 10 + index * 10);
		});

		doc.save("resume.pdf");
	};

	console.log(userData);
	const generatePreview = () => {
		const previewFrame = previewRef.current;
		const previewContent = `
      <html>
        <head>
          <title>Resume Preview</title>
          <style>
            body {
              font-family: Arial, sans-serif;
            }
          </style>
        </head>
        <body>
          <h1>Resume</h1>
          <h2>Name: ${userData.username}</h2>
          <p>Email: ${userData.email}</p>
          <p>Address: ${userData.address}</p>
          <p>Phone: ${userData.phone}</p>
		  <h3>Education</h3>
          <ul> ${userData.educationDetails.map((education) => `<li>institute:${education.institute}, Year:${education.startYear}-${education.endYear},Degree: ${education.designation}</li>`)}</ul>

		  <h3>Experience</h3>
		  <ul>
            ${userData.experienceDetails.map((experience) => `<li>company:${experience.company}, Year: ${experience.startYear}-${experience.endYear}, Role: ${experience.role}</li>`)}
           </ul>
		   <h3>Skills</h3>
          <ul>
            ${userData.tags.map((skill) => `<li>${skill.text}</li>`)}
          </ul>
        </body>
      </html>
    `;

		previewFrame.srcdoc = previewContent;
	};

	return (
		<div>
			<p>you can edit your deatils by clicking on the steps above</p>
			<button type="button" className="btn btn-success" onClick={generatePDF}>
				Generate PDF
			</button>

			<iframe title="Resume Preview" ref={previewRef} width="100%" height="600" />
		</div>
	);
}

export default GenerateResume;
