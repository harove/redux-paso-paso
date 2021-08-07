import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../../store/login/actions";

const Login = () => {
  const [name, setName] = useState<string | null>(null);
  const dispatch = useDispatch()

  const handletOnSubmit = (e:React.FormEvent) => {
    e.preventDefault()
    name&&dispatch(loginAction()) 
  };

  return (
    <div className="card">
      <div className="card header">
        <h1>Login</h1>
      </div>
      <div className="card-body">
        <form onSubmit={(e) => handletOnSubmit(e)}>
          <label htmlFor="name"></label>
          <input
            id="name"
            type="text"
            className="form-control"
            value={name??""}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
          />
          <button className="btn btn-primary mt-2">login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
