import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Products from './Pages/Articles';
import Home from './Pages/Home';
import About from './Pages/About';
import Header from './components/Header';

const Layout = () => {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path={'/'} component={Home} />
        <Route path={'/products/:category'} component={Products} />
        <Route path={'/about'} component={About} />
      </div>
    </Router>
  );
};

export default Layout;
