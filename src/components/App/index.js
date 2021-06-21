// == Import npm
import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  HashRouter,
  Switch,
  Route,
} from 'react-router-dom';
// == Import
// import Header from '../../containers/Header';
// import Footer from '../Footer';
import Main from '../../containers/Main';
import './styles.sass';

// == Composant 
const App = ({ fetchgeneralinfos }) => {
    useEffect(() => {
    }, []);
    return (
      <div className="app">
        Bonjour, ici App
        <HashRouter>
          <Main />
        </HashRouter>
      </div>
    );
  };

// == Export
export default App;
