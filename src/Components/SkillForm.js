import React, { useState } from "react";
import { WithContext as ReactTags } from "react-tag-input";
import "../css/Skills.css";
import { skills } from "../SkillsLlist";

const suggestions = skills.map((skill) => {
	return {
		id: skill,
		text: skill,
	};
});

const KeyCodes = {
	comma: 188,
	enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

const SkillForm = () => {
	const [tags, setTags] = useState([]);

	const handleDelete = (i) => {
		setTags(tags.filter((tag, index) => index !== i));
	};

	const handleAddition = (tag) => {
		setTags([...tags, tag]);
	};

	const handleDrag = (tag, currPos, newPos) => {
		const newTags = tags.slice();

		newTags.splice(currPos, 1);
		newTags.splice(newPos, 0, tag);

		setTags(newTags);
	};

	const handleTagClick = (index) => {
		console.log("The tag at index " + index + " was clicked");
	};

	function handleSubmit(e) {
		e.preventDefault();
	}

	return (
		<div className="container mt-5">
			<h2>Enter your skills</h2>
			<form onSubmit={(e) => handleSubmit(e)} className="form">
				<ReactTags tags={tags} suggestions={suggestions} delimiters={delimiters} handleDelete={handleDelete} handleAddition={handleAddition} handleDrag={handleDrag} handleTagClick={handleTagClick} inputFieldPosition="bottom" autocomplete />
				<button type="submit" className="btn btn-primary">
					next
				</button>
			</form>
		</div>
	);
};

export default SkillForm;
