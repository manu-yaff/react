import React, { useState, useEffect } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetchMoviesHandler();
	}, []);

	const fetchMoviesHandler = async () => {
		setIsLoading(true);
		setError(null);

		try {
			const response = await fetch('https://swapi.dev/api/films/');
			if (!response.ok) {
				// this is then catch below, and assigns the error to the variable
				throw new Error('Something went error');
			}
			const data = await response.json();

			const transformedMovies = data.results.map((movie) => {
				return {
					id: movie.episode_id,
					title: movie.title,
					releaseDate: movie.release_date,
					openingText: movie.opening_crawl,
				};
			});
			setMovies(transformedMovies);
		} catch (error) {
			setError(error.message);
		}
		setIsLoading(false);
		// fetch altarnative
		// fetch('https://swapi.dev/api/films/')
		// 	.then((response) => {
		// 		return response.json();
		// 	})
		// 	.then((data) => {
		// 		const transformedMovies = data.results.map((movie) => {
		// 			return {
		// 				id: movie.episode_id,
		// 				title: movie.title,
		// 				releaseDate: movie.release_date,
		// 				openingText: movie.opening_crawl,
		// 			};
		// 		});
		// 		setMovies(transformedMovies);
		// 	});
	};

	let content = <p>Found no movies</p>;

	if (movies.length > 0) {
		content = <MoviesList movies={movies} />;
	}

	if (error) {
		content = <p>{error}</p>;
	}

	if (isLoading) {
		content = <p>Loading...</p>;
	}

	return (
		<React.Fragment>
			<section>
				<button onClick={fetchMoviesHandler}>Fetch Movies</button>
			</section>
			<section>{content}</section>
		</React.Fragment>
	);
}

export default App;
