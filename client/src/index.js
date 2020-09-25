import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Discover from './pages/discover/discover';
import Dashboard from './pages/dashboard'
import { ProtectedRoute } from "./protected.route";

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/discover" component={Discover} />
      <ProtectedRoute exact path="/dashboard" component={Dashboard} />

    </div>
  </Router>,
  document.getElementById('root')
);

// Ativar PWA: https://bit.ly/CRA-PWA
serviceWorker.unregister();
