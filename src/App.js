import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Login from './pages/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/"><Login /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
