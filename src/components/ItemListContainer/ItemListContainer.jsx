import React from 'react'

function ItemListContainer(props) {
  return (
    <div>
      <img src={props.imagen} alt={props.nombre} style={{ maxWidth: '40%' }} />
      <p>Precio: ${props.precio}</p>  
      <h2>Producto:{props.nombre}</h2>
      <p>Precio: ${props.precio}</p>
      <p>{props.descripcion}</p>
    </div>
  );
}

export default ItemListContainer

