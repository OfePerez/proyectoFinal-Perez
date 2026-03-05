import { useEffect, useState } from "react"
//import { getOneProduct } from "../../asyncmock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { db } from "../../services/config"
import { getDoc, doc} from "firebase/firestore"

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState (null)

  const {idItem}= useParams()

  useEffect(()=>{
    const nuevoDoc =doc(db,"productos", idItem)
    getDoc(nuevoDoc)
    .then(res=>{
      const data= res.data()
      const nuevoProducto= {id: res.id, ...data}
      console.log(nuevoProducto)
      setProducto(nuevoProducto)
      .catch(error=> console.log(error))
    })
  },[idItem])

  // useEffect(() => {
  //   getOneProduct(idItem)
  //   .then(respuesta => setProducto (respuesta))
  // },[idItem])
  return (
    <div>
      {producto ? <ItemDetail {...producto}/> : <p>Cargando datos...</p>}
    </div>
  )
}



export default ItemDetailContainer