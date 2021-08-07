import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useInput from "../../hooks/useInput";
import { Link, useHistory, useParams } from "react-router-dom";
import { updateUserAction } from "../../store/users/actions";


const UserDetail = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id }: any = useParams();
  const userList = useSelector((state:any)=>state.users.data);
  const [name, handlerName, setName] = useInput("");
  const [email, handlerEmail, setEmail] = useInput("");

  useEffect(() => {
    const u = userList.find((elem:any) => elem.id === Number.parseInt(id));
    if (u) {
      setName(u.name);
      setEmail(u.email);
    }
  }, [userList, id]);
  
  const handlerSave = (event: any) => {
    event.preventDefault();
    dispatch(
      updateUserAction({
        id: Number.parseInt(id),
        name,
        email,
      })
    );
    history.push("/");
  };


  return (
    <div className="row">
      <div className="col">
        <div className="card">
          <div className="card-header">
            Nuevo Usuario
            <div className="btn-group">
              <Link className="btn btn-link" to="/">
                Listado
              </Link>
            </div>
          </div>
          <form onSubmit={handlerSave}>
            <div className="card-body">
              <label>Nombre</label>
              <input
                className="form-control"
                type="text"
                value={name}
                onChange={e=>setName(e.target.value)}
              />
              <label>Email</label>
              <input
                className="form-control"
                type="email"
                value={email}
                onChange={handlerEmail}
              />
            </div>
            <div className="card-footer">
              <button
                className="btn btn-primary mt-3"
                disabled={name === "" || email === ""}
              >
                Guardar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default UserDetail;
