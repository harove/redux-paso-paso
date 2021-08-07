import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./containers/navbar/Navbar";
import ProductCreate from "./containers/product-create/ProductCreate";
import ProductDetail from "./containers/product-detail/ProductDetail";
import ProductList from "./containers/product-list/ProductList";
import UserDetail from "./containers/user-detail/UserDetail";
import UserList from "./containers/user-list/UserList";
import UserCreate from "./containers/users-create/UserCreate";

function App() {
  return (
    <div className="container mt-4">
        <Router>
          <Navbar/>
          <Route path="/" exact>
            <UserList />
          </Route>
          <Route path="/create">
            <UserCreate />
          </Route>
          <Route path="/detail/:id">
            <UserDetail />
          </Route>
          <Route path="/products" exact>
            <ProductList />
          </Route>
          <Route path="/products/create">
            <ProductCreate />
          </Route>
          <Route path="/products/detail/:id">
            <ProductDetail />
          </Route>
        </Router>
    </div>
  );
}

export default App;
