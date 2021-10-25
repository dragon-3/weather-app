import logo from './logo.svg';
import './App.css';
import HomeComponent from './Components/HomeComponent';
import WeatherComponent from './Components/WeatherComponent';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Switch>
            <Route path="/weather/:id" exact component={WeatherComponent} />
            <HomeComponent />
          </Switch>
        </>
    </Router>
    </div>
  );
}

export default App;
