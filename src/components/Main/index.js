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
import './styles.sass';

// == Composant
const Main = ({ fetchgeneralinfos, infos }) => {
    useEffect(() => {
      fetchgeneralinfos();
    }, []);
    console.log(infos);
    return (
      <div className="app">
        Ici main : 
        Infos du site :
        {infos.map((element) => (
          <h1>titre de la page : {element.title.rendered}</h1>
        ))}
      </div>
    );
  };
// == Export
export default Main;
