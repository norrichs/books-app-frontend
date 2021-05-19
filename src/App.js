import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Library from "./components/Library";
import Series from "./components/Series";
import Modal from "./components/Modal";
import React from "react";
import axios from "axios"; // Using for troubleshooting

function App() {
	// * State variables
	const [books, setBooks] = React.useState([]);
	const [editBook, setEditBook] = React.useState([]);
	const [showCreateModal, setShowCreateModal] = React.useState(false);
	const [showEditModal, setShowEditModal] = React.useState(false);

	// * Other variables
	// const url = "http://localhost:4500";
	const url = "https://seir329-books-app.herokuapp.com";
	const emptyBook = {
		author: "",
		title: "",
		date: "",
		cover: "",
		// series: {
		// 	serial: false,
		// 	sequence: 0,
		// 	name: "",
		// },
	};

	// * Modal visibility functions
	const handleSwitchCreateModal = () =>
		showCreateModal ? setShowCreateModal(false) : setShowCreateModal(true);
	const handleSwitchEditModal = (book) => {
		showEditModal ? setShowEditModal(false) : setShowEditModal(true);
		setEditBook({ ...book });
	};

	// * CRUD functions
	const handleCreate = (book) => {
		console.log("axios create - source data", book);
    handleSwitchCreateModal();
    if(verifyBookData(book)){
      axios.post(url + "/book", book).then((resp) => {
        console.log("axios response", resp);
        getBooks();
      });
    }
	};
	const handleUpdate = (book) => {
		console.log("handleEdit book", book);
		handleSwitchEditModal();
		axios.put(url + "/book/" + book._id, book).then((resp) => {
			setEditBook({ emptyBook });
			getBooks();
		});
	};
	const handleDelete = (book) => {
		console.log("handle delete ", book);
		handleSwitchEditModal();
		axios.delete(url + "/book/" + book._id).then((resp) => {
			console.log("deleted", book, "all books", books);
			getBooks();
		});
	};

	// * Other functions
	const verifyBookData = (book) => {
		// Stub function for data verification
		// Check if title already exists
		// If there is a conflict, present both options for choice
		//  return values: false -> cancel, true -> submit data
		return true;
	};
	const getBooks = () => {
		fetch(url + "/book/")
			.then((res) => res.json())
			.then((data) => setBooks(data));
	};
	React.useEffect(() => {
		getBooks();
	}, []);

	return (
		<div className="App">
			<Header handleSwitchCreateModal={handleSwitchCreateModal} />
			<Switch>
				<Route path="/series">
					<Series className="main" />
				</Route>
				<Route exact path="/">
					<Library
						handleSwitchEditModal={handleSwitchEditModal}
						className="main"
						books={books}
					/>
				</Route>
			</Switch>
			<Modal
				title={`Create New Entry`}
				formType="create"
				handleSwitchModal={handleSwitchCreateModal}
				book={emptyBook}
				handleSubmitForm={handleCreate}
				show={showCreateModal}
			/>
			<Modal
				title={`Edit Record for "${editBook.title}"`}
				formType="edit"
				handleSwitchModal={handleSwitchEditModal}
				book={editBook}
				handleSubmitForm={handleUpdate}
				show={showEditModal}
				handleDelete={handleDelete}
			/>
		</div>
	);
}

export default App;
