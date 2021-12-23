import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyles';
import Home from './pages';
import MintPage from './pages/MintPage';

function App() {

  return (
    <>
      <Router>
        <GlobalStyle />
        <Route path="/" component={Home} exact></Route>
        <Route path="/mint" component={MintPage} exact></Route>
      </Router>
    </>
  );
}

export default App;
