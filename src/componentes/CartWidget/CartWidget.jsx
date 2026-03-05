import "./CartWidget.css"
import { useContext } from "react"
import { CarritoContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const CartWidget = () => {
  const {cantidadTotal}=useContext(CarritoContext)
    const imgCartWidget= "https://i.pinimg.com/736x/a2/77/73/a27773a7a4ddf8c6c1b43ae03f53c95e.jpg"
  return (
    <div>
        <img className ="imgCarrito"  src={imgCartWidget} alt="imagen de un carrito de compras" />
        {
          cantidadTotal> 0 && <strong>{cantidadTotal}</strong>
        }
    </div>
  )
}

export default CartWidget