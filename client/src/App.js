import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './views/Home';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
};

export default App;