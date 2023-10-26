import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <Switch>
        {/* Outras rotas */}
        <Route path="/dashboard" component={Dashboard} />
        {/* Outras rotas */}
      </Switch>
    </Router>
  );
}

export default App;
