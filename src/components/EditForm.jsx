import React, { useState } from "react";

const EditForm = (props) => {
	console.log('loading edit form with props',props);
	const [formData, setFormData] = useState(props.book);

	// * Handler functions
	const handleChange = (e) => {
		// console.log(formData);
		const id = e.target.id;
		const value =
			e.target.type === "checkbox"
				? e.target.checked
				: e.target.type === "number"
				? parseInt(e.target.value)
				: e.target.value;
		if (id.substr(0, 6) === "series") {
			setFormData({
				...formData,
				series: {
					...formData.series,
					[id.substr(7)]: value,
				},
			});
		} else {
			setFormData({
				...formData,
				[id]: value,
			});
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		props.handleSubmitForm(formData);
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="row">
				<div className="column">
					<input
						onChange={handleChange}
						placeholder="title"
						value={formData.title}
						id="title"
					/>
				</div>
			</div>

			<div className="row">
				<div className="column column-60">
					<input
						onChange={handleChange}
						placeholder="author"
						value={formData.author}
						id="author"
					/>
				</div>
				<div className="column column-40">
					<input
						onChange={handleChange}
						placeholder="published date"
						value={formData.date}
						id="date"
						type="date"
					/>
				</div>
			</div>
			<div className="row">
				<div className="column">
					<input
						onChange={handleChange}
						placeholder="cover url"
						value={formData.cover}
						type="url"
						id="cover"
					/>
				</div>
			</div>
			{/* 

			// * SERIES inputs
			// * previously implemented, but extraneous
			// TODO reimplemnt as related secondary model
			<div className="row">
				<div className="column column-10">
					<input
						checked={formData.series.serial}
						type="checkbox"
						id="series-serial"
					/>
				</div>
				<div className="column column-30">
					<label className="label-inline" for="serial">
						In a series?
					</label>
				</div>
				<div className="column column-60">
					<input
						placeholder="# in sequence"
						type="number"
						value={formData.series.sequence}
						id="series-sequence"
						min="0"
						step="1"
					/>
				</div>
			</div>
			<input
				placeholder="series name"
				value={formData.series.name}
				id="series-name"
			/> */}
			<div className="row">
				<div className="column column-50">
					<input
						className="column button button-black"
						onClick={() => {
							props.handleDelete(props.book);
						}}
						type="button"
						value="Delete"
					/>
				</div>
				<div className="column column-50">
					<input className="column" type="submit" />
				</div>
			</div>
		</form>
	);
};
export default EditForm;

// const emptyBook = {
// 	author: "",
// 	title: "",
// 	date: "",
// 	cover: "",
// 	series: {
// 		serial: "",
// 		sequence: "",
// 		name: "",
// 	},
// };
