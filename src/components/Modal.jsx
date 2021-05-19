import React from "react";
import CreateForm from "./CreateForm";
import EditForm from "./EditForm";

const Modal = (props) => {
	// console.log("modal props", props);
	const modalForm = () => {
		switch (props.formType) {
			case "create":
				return (
					<CreateForm
						handleCreate={props.handleFormSubmit}
						emptyBook={props.book}
					/>
				);
				break;
			case "edit":
				return (
					<EditForm
						handleDelete={props.handleDelete}
						handleSubmitForm={props.handleSubmitForm}
						book={props.book}
					/>
				);
				break;
			default:
				return <h1>no form</h1>
		}
	};
	const showModal = () => {
		return (
			<div className="modal-box">
				<div className="row">
					<h2 className="column column-90">{props.title}</h2>
					<div className="column column-10">
						<button
							onClick={props.handleSwitchModal}
							className="button button-outline button-small"
						>
							X
						</button>
					</div>
				</div>
				{modalForm()}
			</div>
		);
	};
	return props.show ? showModal() : null;
};
export default Modal;
