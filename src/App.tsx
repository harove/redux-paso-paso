import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import Login from "./containers/login/Login";
import Navbar from "./containers/navbar/Navbar";
import ProductCreate from "./containers/product-create/ProductCreate";
import ProductDetail from "./containers/product-detail/ProductDetail";
import ProductList from "./containers/product-list/ProductList";
import UserDetail from "./containers/user-detail/UserDetail";
import UserList from "./containers/user-list/UserList";
import UserCreate from "./containers/users-create/UserCreate";

function App() {
  const isLogin = useSelector((state: any) => state.login.isLogin);
  return (
    <div className="container mt-4">
      <Router>
        <Navbar />
        <Route path="/" exact>
          <UserList />
        </Route>
        <Route path="/create">
          <UserCreate />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/detail/:id">
          <UserDetail />
        </Route>
        <Route path="/products" exact>
          <ProductList />
        </Route>
        <PrivateRoute isLogin={isLogin} path="/products/create" component={ProductCreate}/>
        {/* <Route path="/products/create">
          <ProductCreate />
        </Route> */}
        <Route path="/products/detail/:id">
          <ProductDetail />
        </Route>
      </Router>
    </div>
  );
}

export default App;
