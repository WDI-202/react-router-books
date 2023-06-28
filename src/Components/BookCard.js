import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BookCard = ({ book }) => {
	const [coverPhoto, setCoverPhoto] = useState("");

	const navigate = useNavigate();

	useEffect(() => {
		setCoverPhoto(`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`);
	}, [book]);

	const toMovieDetails = () => {
		// navigate(`/book/works/${book.key}`);
		//book.key = /works/OL66554W
		//http://localhost:3000/book/works//works/OL66554W (error)
		navigate(`/book${book.key}`);
		//http://localhost:3000/book/works/OL66554W
	};

	return (
		<div onClick={toMovieDetails}>
			{/** think about how to use this /book/works/:bookKey use the correct property that will give you the key */}
			{/** on click navigate to the route */}
			<p>{book.title}</p>
			<img src={coverPhoto} />
		</div>
	);
};

export default BookCard;
