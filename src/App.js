import React from 'react';
import TakeOrder from './pages/Cliente';
import SeeOrder from './pages/Cozinha'
import { StyleSheet, css } from 'aphrodite';
import logo from './imagens/logo.png';
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
          <img src={logo} alt='Logo Burguer Queen' className={css(styles.logo)} />
          <ul className={css(styles.ul)}>
            <li className={css(styles.li)}>
              <Link to="/" className={css(styles.a)}>Cliente</Link>
            </li>
            <li className={css(styles.li)}>
              <Link to="/cozinha" className={css(styles.a)}>Cozinha</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/cozinha">
          < SeeOrder/>
          </Route>
          <Route path="/">
            <TakeOrder/>
          </Route>
        </Switch>
      </Router>
    </div>

  )
}

const styles = StyleSheet.create({
  nav: {
    width: '100%',
    backgroundColor: '#c5350d',
    height: '8vw',
    display: 'flex',
    justifyContent: 'flex-end',
    
  },
  
  ul: {
    marginLeft:'15%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'flex-end',
    alignItems:'flex-end',
    fontFamily: 'Ubuntu, sans-serif',
  },
  
  li: {
    listStyleType: 'none',
    margin: '0',
    
  },
  
  a: {
    color: '#00B383',
    textDecoration: 'none',
    fontSize: '2em',
    fontWeight: 'bold',
    marginInlineEnd: '20px', 
    
  },
  
  logo: {
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    width: '100px',
    height: '100px',
    borderRadius: '50%',
  }
});

export default App;
