import { useState, useContext} from "react"
import { CarritoContext } from "../../context/CartContext";
import {db} from "../../services/config.js"
import {collection, addDoc} from "firebase/firestore"


const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido]= useState("");
    const [telefono, setTelefono]= useState("");
    const [email, setEmail]= useState("");
    const [emailConfirmacion, setEmailConfirmacion]= useState();
    const [error, setError]= useState("");
    const [ordenId, setOrdenId]= useState("")

    const {carrito, vaciarCarrito, total}= useContext(CarritoContext);
    

    const manejadorFormulario= async (event)=>{
        event.preventDefault();
        setError("");

        if(!nombre || !apellido || !telefono || !email || !emailConfirmacion){
            setError("Por favor conpleta los campos")
            return
        }
        if(email!== emailConfirmacion){
            setError("Los campos no coinciden")
            return
        }

        const orden={
            items: carrito.map((producto)=>({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        }
        addDoc(collection(db, "ordenes"), orden)
        .then(docRef =>{
            setOrdenId(docRef.id)
            vaciarCarrito()
        })
        .catch(error=>{
            console.log("Error real:", error)
            setError("Se produjo un error al crear la orden")
        })
    }

  return (
    <div>
        <h2>Checkout:</h2>
        <form onSubmit={manejadorFormulario}>
            {
                carrito.map(producto=>(
                    <div key= {producto.item.id}>
                        <p>{producto.item.nombre} x {producto.cantidad}</p>
                        <p>{producto.item.precio}</p>
                        <hr/>

                    </div>
                ))
            }
            <div>
                <label htmlFor="nombre">Nombre</label>
                <input id= "nombre" type="text" onChange={(e)=> setNombre(e.target.value)} />
            </div>
            <div>
                <label htmlFor="apellido">Apellido</label>
                <input id= "apellido" type="text" onChange={(e)=> setApellido(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="telefono">Teléfono</label>
                <input id="telefono" type="text"onChange={(e)=> setTelefono(e.target.value)} />
            </div>
            <div>
                <label htmlFor="email">E-amil</label>
                <input id="email" type="text" onChange={(e)=> setEmail(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="confirmarEmail">Confirmar E-mail</label>
                <input id="confirmarEmail" type="text" onChange={(e)=> setEmailConfirmacion(e.target.value)}/>
            </div>   

            {
                error && <p style={{color: "red"}}>{error}</p>
            }

            <button type="submit">Confirmar Compra</button> 
            { ordenId && (
                    <strong>Gracias por tu compra! Tu número de orden es {ordenId}</strong>
                )}
        </form>
        
    </div>
  )
}

export default Checkout