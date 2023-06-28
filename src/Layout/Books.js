import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookCard from "../Components/BookCard";

const Books = () => {
	const [books, setBooks] = useState([]);

	const { subject } = useParams();

	useEffect(() => {
		const getData = async () => {
			const response = await fetch(
				`https://openlibrary.org/subjects/${subject}.json?limit=12`
			);
			const data = await response.json();
			console.log(data.works);
			setBooks(data.works);
		};
		getData();
	}, [subject]);

	return (
		<div>
			{books.map((book) => {
				return <BookCard key={book.key} book={book} />;
			})}
		</div>
	);
};

export default Books;
