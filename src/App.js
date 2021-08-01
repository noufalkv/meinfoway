import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Detail';
import Navbar from './component/Navbar';
import './App.css';

function App() {
  return (
    <Router>

      <header className="row">

        <Navbar />
      </header>

      <main>
        <Switch>
          <Route path="/item/:id" component={Details}></Route>
          <Route path="/" component={Home} exact></Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
