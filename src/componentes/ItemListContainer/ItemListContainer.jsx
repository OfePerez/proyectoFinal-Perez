import { useState, useEffect } from "react"
/*import { getProductos, getProductosPorCategoria } from "../../asyncmock"*/
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"
import { useParams } from "react-router-dom"
import { db } from "../../services/config"
import { collection, getDocs, query, where } from "firebase/firestore"
import Loader from "../Loader/Loader"


const ItemListContainer = (props) => {
  const[productos, setProductos] = useState([])
  const[loading, setLoading] = useState(false)
  const {idCategoria} = useParams()

  useEffect(()=>{
    setLoading(true)
    const misProductos= idCategoria ? query (collection(db,"productos"), where("idCat","==",idCategoria)) : collection(db,"productos")

    getDocs(misProductos)
    .then(res=>{
      const nuevosProductos = res.docs.map(doc=>{
        const data=doc.data()
        return{id:doc.id,...data}
      })
      setProductos(nuevosProductos)
    })
    .catch(error=> console.log(error))
    .finally(()=>{
      console.log("proceso terminado")
      setLoading(false)
    })
  },[idCategoria])

  /*useEffect(()=>{
    /*const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos*/

    //funcionProductos(idCategoria)
    //.then(respuesta=> setProductos(respuesta))

  //},[idCategoria])

  return (
    <>
      <h2>Instrumentos Musicales</h2>
      {loading ? <Loader/> :<ItemList productos={productos}/> }
      
    </>
  )
}

export default ItemListContainer