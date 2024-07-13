import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Products from './Pages/Articles';
import Home from './Pages/Home';
import About from './Pages/About';
import Header from './components/Header';
import Cart from './Pages/Cart';
import { CartItem } from './types';

const Layout = () => {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path={'/'} component={Home} />
        <Route path={'/products/:category'} component={Products} />
        <Route path={'/about'} component={About} />
        <Route path={'/cart'} component={Cart} />
      </div>
    </Router>
  );
};

export default Layout;
