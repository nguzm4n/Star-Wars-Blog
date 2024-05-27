import React from 'react'
import { FaRegTrashAlt } from "react-icons/fa";


const Favorito = ({ name, deleteFav}) => {
  return (
    <div className='d-flex'>
        <li><a className="dropdown-item"  data-bs-auto-close="false">{name}</a></li> <FaRegTrashAlt  size={20}  onClick={deleteFav}  className='mt-2 mx-2'/>
    </div>
  )
}

export default Favorito