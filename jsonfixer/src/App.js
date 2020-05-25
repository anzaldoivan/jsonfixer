import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Fixer from "./Components/Fixer"
import Nav from "./Components/Nav"
import Json from "./Pages/Json"

document.title = "IOSoccer Sudamerica JSON Fixer";
document.description = "Sitio web utilizado como herramienta para arreglar estadisticas de la comunidad de IOSoccer Sudamerica.";

/*<Switch>
          <Route path="/db" exact component={Db} />
          <Route path="/players" component={Home} />
          <Route path="/" exact component={Profile} />
          <Route path="/teams" exact component={Teams} />
          <Route path="/table" exact component={Table} />
</Switch>*/

function App(){
  return(
    <Router>
      <div className="App">
        <Nav />
        <Json />
      </div>
    </Router>
  )
}

export default App;
