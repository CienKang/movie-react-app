import { useEffect, useState} from "react";
import MovieList from "../components/MovieList";
import MovieListHeading from "../components/MovieListHeading";
import SearchBox from "../components/SearchBox";

const BrowsePage = (props) => {
    const [result, setResult] = useState([]);
    const[searchValue,setSearchValue] = useState('');
    const [typeName,setTypeName] = useState('Movies');
    const getMovieSearchRequestByName = async (searchValue) => {
		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setResult(responseJson.Search);
		}

	};

    useEffect(() => {
		getMovieSearchRequestByName(searchValue);
	}, [searchValue]);

      return (
        <div className='container-fluid movie-app'>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading={typeName} />
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} typeName={typeName} />
			</div>
			<div className='row'>
				<MovieList movies={result} />
			</div>
		</div>
      );
}
 
export default BrowsePage;