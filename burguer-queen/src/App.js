import React from 'react';
import FazerPedido from './components/Clientes/Cliente'
import { StyleSheet, css } from 'aphrodite';
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
          <nav className={css(styles.nav)}>
            <ul className={css(styles.ul)}>
              <li className={css(styles.li)}>
              <Link to="/" className={css(styles.a)}>Cliente</Link>
              </li>
              <li className={css(styles.li)}>
              <Link to="/cozinha" className={css(styles.a)}>Cozinha</Link>
              </li>
            </ul>
          {/*   <span><img src="/imagens/logo.png" alt=""/></span> */}
          </nav>
          <Switch>
            <Route path="/cozinha">
              <div>peraí</div>
            </Route>
            <Route path="/">
              <FazerPedido />
            </Route>
          </Switch>
      </Router>
    </div>

  )
}

const styles = StyleSheet.create({
  nav : {
    marginTop:'0px',
    width:'1024px',
    backgroundColor:'#c5350d',
    height:'8vw'

  },

  ul : {
    margin:'0',
    display:'flex',
    flexDirection:'row',
    alignItems:'space-around',
    fontFamily:'Ubuntu, sans-serif',
   
  },
  
  li: {
    listStyleType:'none',
     margin:'3vw 1vw', 
     
  },

  a : {
    color:'#00B383',
    textDecoration:'none',
    fontSize:'2em',
    fontWeight:'bold',
  },
  
});
export default App;
