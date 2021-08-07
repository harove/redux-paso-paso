import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProductAction } from "../../store/products/actions";

const ProductList = () => {
  const productList = useSelector((state:any)=>state.products.data);
  const dispatch = useDispatch();
  
  const handlerDelete = (id: any) => {
    dispatch(deleteProductAction(id));
  };

  return (
    <div className="row">
      <div className="col">
        <div className="card">
          <div className="card-header">
            Listado
            <div className="btn-group">
              <Link className="btn btn-link" to="/products/create">
                Nuevo
              </Link>
            </div>
          </div>
          <div className="card-body">
            {productList.length > 0 ? (
              <table className="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th className="text-end">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {productList.map((u: any) => (
                    <tr key={u.id}>
                      <td>
                        <div
                          className="badge bg-dark"
                        >
                          {u.id}
                        </div>
                      </td>
                      <td>{u.name}</td>
                      <td>{u.price}</td>
                      <td className="text-end">
                        <div className="btn-group">
                          <button
                            className="btn btn-sm btn-danger"
                            onClick={() => handlerDelete(u.id)}
                          >
                            eliminar
                          </button>
                          <Link
                            className="btn btn-sm btn-primary"
                            to={`/products/detail/${u.id}`}
                          >
                            detalle
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="alert alert-danger">No existen elementos</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductList;