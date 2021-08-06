import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import UserCreate from "./components/userCreate/UserCreate";

function App() {
  return (
    <div className="container mt-4">
        <Router>
          {/* <Route path="/" exact>
            <UserList />
          </Route> */}
          <Route path="/create">
            <UserCreate />  
          </Route>
          {/* <Route path="/detail/:id">
            <UserDetail />
          </Route> */}
        </Router>
    </div>
  );
}

export default App;
