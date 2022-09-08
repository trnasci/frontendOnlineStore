import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Source from './Component/Source';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Source } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
