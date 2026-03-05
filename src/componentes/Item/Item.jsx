import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, nombre, precio, img}) => {
  return (
    <div className='cardProduct'>
        <img src={img} alt={nombre}/>
        <h3>{nombre}</h3>
        <p>ARS {precio}</p>
        <p>{id}</p>
        <Link to={`/item/${id}`}>Ver más</Link>
        
    </div>
  )
}

export default Item