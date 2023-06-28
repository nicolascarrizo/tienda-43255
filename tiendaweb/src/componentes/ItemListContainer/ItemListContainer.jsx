import { useState, useEffect } from "react" //hooks
import ItemList from "../ItemList/ItemList" // agrupador de productos
import { getProductos, getCategoria } from "../../asyncmock" // traigo la funcion con los productos
import { useParams } from "react-router-dom"

const ItemListContainer = () => {
  //para almacenar el listado de productos
  const [productos, setProductos] = useState([])

  const { idCategoria } = useParams()

  useEffect(() => {
    const funcionProductos = idCategoria ? getCategoria : getProductos

    funcionProductos(idCategoria)
      .then((resolve) => setProductos(resolve))
      .catch((error) => console.log(error))
  }, [idCategoria])

  return (
    <>
      <div>
        <h2 className="pl-5 text-2xl font-thin text-blue-900">
          Productos Marolio
        </h2>
        <h3 className="pl-5 text-l font-thin ">
          <strong>Utilizamos: </strong>Item, ItemList e ItemListContainer, con
          un mock de datos local (con retraso simulado de 2segs)
        </h3>
        <ItemList productos={productos} />
      </div>
    </>
  )
}

export default ItemListContainer
