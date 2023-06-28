import "./CartWidget.css"

const CartWidget = () => {
  const imgCarrito = "https://cdn-icons-png.flaticon.com/512/107/107831.png"
  return (
    <div className="flex flex-row mr-4">
      <img className="imgCarrito" src={imgCarrito} alt="carrito de compras" />
      <strong className="bg-yellow-300 outline outline-1 shadow-md rounded-full py-1 px-1 text-sm text-blue-900 hover:text-blue-950 hover:bg-green-300 -mt-1 -ml-4 mb-6">
        {" "}
        10{" "}
      </strong>
    </div>
  )
}

export default CartWidget
