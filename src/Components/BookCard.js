import React, { useEffect, useState } from "react";

const BookCard = ({ book }) => {
	const [coverPhoto, setCoverPhoto] = useState("");
	useEffect(() => {
		setCoverPhoto(`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`);
	}, [book]);

	return (
		<div>
			<p>{book.title}</p>
			<img src={coverPhoto} />
		</div>
	);
};

export default BookCard;
