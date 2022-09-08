import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Source from './Component/Source';
import Carrinho from './Component/Carrinho';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Source } />
        <Route exact path="/carrinho" component={ Carrinho } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
