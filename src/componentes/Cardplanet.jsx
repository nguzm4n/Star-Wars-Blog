import React, { useContext } from 'react'
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { Context } from '../store/Appcontext';

const Card = ({name, moreInfo, description, favorito, deleteFav}) => {

    const { store, actions } = useContext(Context);
    return (
        <div>
            <div className="card my-2 mx-3" style={{width: '18rem'}}>
                <img src="" className="card-img-top" alt=""/>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{description}</p>
                        <Link to="/planet" className="btn btn-outline-info me-5" onClick={moreInfo} >Learn More</Link>     {store.favorites.includes(name) ? <FaHeart size={25}  className='ms-5' onClick={deleteFav}/> : <FaRegHeart size={25}  className='ms-5'  onClick={favorito}/>}
                    </div>
            </div>
        </div>
    )
}

export default Card