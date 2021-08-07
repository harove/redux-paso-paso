import { useDispatch } from "react-redux";
import useInput from "../../hooks/useInput";
import { Link, useHistory } from "react-router-dom";
import { createProductAction } from "../../store/products/actions";

const ProductCreate = () => {
  const [name, handlerName] = useInput("");
  const [price, handlerPrice] = useInput("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handlerSave = (event: any) => {
    event.preventDefault();
    dispatch(
      createProductAction({
        id: new Date().getTime(),
        name,
        price,
      })
    );
    history.push("/products");
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
                onChange={handlerName}
              />
              <label>Price</label>
              <input
                className="form-control"
                type="number"
                value={price}
                onChange={handlerPrice}
              />
            </div>
            <div className="card-footer">
              <button
                className="btn btn-primary mt-3"
                disabled={name === "" || price === ""}
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
export default ProductCreate;
