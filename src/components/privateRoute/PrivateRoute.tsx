import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

interface Props {
  isLogin:boolean,
  component:React.ComponentType<any>;
  path:string
  exact?:boolean
}

const PrivateRoute = ({component: Component, isLogin, ...Rest}: Props) => {
  // const isLogin = useSelector((state:any) => state.login.isLogin)
  return isLogin ? <Route {...Rest} render={routeProps=><Component {...routeProps}/>}  /> : <Redirect to="/" />;
};

export default PrivateRoute;
