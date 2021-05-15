import './App.css';
import Nav from './Components/Nav'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchMovies from './Components/SearchMovies';
import logo from './Components/Img/filmReel.jpeg'



function App() {
  return (
    <Router>
      <div className="App">
     <Nav />
    <Switch>
     <Route path = "/" exact component={Home} />
     <Route path= "/search-movies" component={SearchMovies} />
     


    </Switch>

      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>React Movie Search!</h1>
  
    <p>Welcome to my React.JS movie search engine! In order to get started, please click on search movies on the upper right-hand corner! </p>
    <div>
      <img className="reel" src={logo} alt='film-reel'></img>
    </div>
  </div>
)

export default App;
