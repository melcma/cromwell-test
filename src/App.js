import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/"><Login /></Route>
          <Route path="/register"><Register /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
