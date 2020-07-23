import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import ProductScreen from "./components/ProductScreen";
import "./App.css";

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };

  return (
    <div class="grid-container">
      <header class="header">
        <div class="brand">
          <button onClick={openMenu}>&#9776;</button>
          <Link to="/">E-SHOP</Link>
        </div>
        <div class="header-links">
          <Link to="/cart">Cart</Link>
          <Link to="/SignIn">SignIn</Link>
        </div>
      </header>

      <aside class="sidebar">
        <button class="sidebar-close-button" onClick={closeMenu}>
          X
        </button>
        <h3>Categories</h3>
        <ul>
          <li>
            <a href="/">Laptops</a>
          </li>
          <li>
            <a href="/">Mobile Phones</a>
          </li>
        </ul>
      </aside>

      <main class="main">
        <div class="content">
          <Switch>
            <Route path="/" exact={true} component={HomeScreen} />
            <Route path="/product/:id" exact={true} component={ProductScreen} />
          </Switch>
        </div>
      </main>
      <footer class="footer">All rights reserved. cc</footer>
    </div>
  );
}

export default App;
