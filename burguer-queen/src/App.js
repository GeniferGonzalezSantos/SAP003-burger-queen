import React from 'react';
import FazerPedido from './Cliente'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        <div>
          <nav>
            <ul>
              <br></br>
                <Link to="/">Cliente</Link>
              <br></br>
                <Link to="/cozinha" log>Cozinha</Link>
            </ul>
          </nav>
          <Switch>
            <Route path="/cozinha">
              <div>peraí</div>
            </Route>
            <Route path="/">
            <FazerPedido/>
            </Route>
          </Switch>
        </div>
      </Router>

    </div>
  )
}

export default App;
