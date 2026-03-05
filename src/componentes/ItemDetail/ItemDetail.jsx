import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"
import { useState } from "react"
import { CarritoContext} from "../../context/CartContext"
import { useContext } from "react"
import { toast } from "react-toastify"


const ItemDetail = ({id, nombre, precio, img, stock}) => {

    const [agergarCantidad, setAgregarcantidad]= useState(0)
    const{agregarAlCarrito} =useContext(CarritoContext)

    const manejarCantidad= (cantidad)=>{

      setAgregarcantidad(cantidad)

      const item={id, nombre, precio}
      agregarAlCarrito(item,cantidad)
      toast.success("Sus productos fueron enviados al carrito!",{
        autoClose:1000, theme: "dark", position: "top-right"
      })
    }

  return (
    <div className='contentItem'>
        <h2> {nombre}</h2>
        <h3> ARS $ {precio}</h3>
        <h3>Id: {id}</h3>
        <img src={img} alt={nombre}/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, minus?</p>

        {
          agergarCantidad > 0 ? (<Link to="/cart"> terminar compra</Link>) : (<ItemCount inicial={1}stock={stock} funcionAgregar={manejarCantidad}/>)
        }
    </div>
  )
}

export default ItemDetail