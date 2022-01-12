import './App.css';
import Home from "./Home";
import Header from "./Header";
import Checkout from "./Checkout";
import Login from "./Login";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <Router>

        <Switch>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/">    
            <Header />
            <Home />
          </Route>

        </Switch>

      </Router>

    </div>
  );
}

export default App;
