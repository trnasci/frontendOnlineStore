import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Source from './Component/Source';
import Carrinho from './Component/Carrinho';
import PodructDetail from './Component/PodructDetail';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Source } />
        <Route exact path="/carrinho" component={ Carrinho } />
        <Route path="/product/:id" component={ PodructDetail } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
