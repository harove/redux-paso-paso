import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useInput from "../../hooks/useInput";
import { Link, useHistory, useParams } from "react-router-dom";
import { updateProductAction } from "../../store/products/actions";


const ProductDetail = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id }: any = useParams();
  const userList = useSelector((state:any)=>state.products.data);
  const [name, handlerName, setName] = useInput("");
  const [price, handlerPrice, setPrice] = useInput(0+'');

  useEffect(() => {
    const u = userList.find((elem:any) => elem.id === Number.parseInt(id));
    if (u) {
      setName(u.name);
      setPrice(u.price);
    }
  }, [userList, id]);
  
  const handlerSave = (event: any) => {
    event.preventDefault();
    dispatch(
      updateProductAction({
        id: Number.parseInt(id),
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
                onChange={e=>setName(e.target.value)}
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
export default ProductDetail;
