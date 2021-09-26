import { useEffect, useState } from "react";
import { Route, Switch } from "react-router";
import BrowsePage from "./pages/BrowsePage";
import Info from "./pages/InfoPage";

const App = () => {
  const [searchID, setSearchID] = useState('Loading......');
  const [result, setResult] = useState([]);

    const getMovieDataRequestByName = async (searchValue) => {
		const url = `http://www.omdbapi.com/?i=${searchValue}&apikey=263d22d8`;

		const response = await fetch(url);
		const responseJson = await response.json();
		if (responseJson) {
			setResult(responseJson);
		}
	};
  useEffect(() => {
		getMovieDataRequestByName(searchID);
	}, [searchID]);
  
  useEffect(()=>{
    var now = window.location.href;
    console.log(now.slice(now.search('/tt')+1))
    setSearchID(now.slice(now.search('/tt')+1));
  },[]);
    return (
      <>
      <Switch>
      <Route exact path='/browse' ><BrowsePage setSearchID={setSearchID}/> </Route>
      <Route exact path={`/info/${searchID}`}><Info result={result} /></Route>
      </Switch>
      </>
    )
}

export default App;
