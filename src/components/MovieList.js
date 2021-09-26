

const MovieList = (props) => {
	return (
		<>
			<div class="container">
				{props.movies.map((movie, index) => (
					<div class="column">

						<div class="card back-card">
							<a href={`/info/${movie.imdbID}`}><img  className="image-set" src={movie.Poster} alt='movie' ></img></a>
							<div className="card-body ">
								<h5 className="card-title movie-text">{movie.Title}      ({movie.Year})</h5>
								<a href="/home" className="btn btn-outline-info btn-end">Add to Favourite</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</>

	);
}

export default MovieList;