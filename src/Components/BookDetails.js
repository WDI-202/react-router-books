import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const BookDetails = () => {
	const [selectedBook, setSelectedBook] = useState({});
	const { bookKey } = useParams();

	useEffect(() => {
		const getData = async () => {
			const response = await fetch(
				`https://openlibrary.org/works/${bookKey}.json`
			);
			const data = await response.json();
			setSelectedBook(data);
		};
	}, [bookKey]);
	return <div>BookDetails</div>;
};

export default BookDetails;
