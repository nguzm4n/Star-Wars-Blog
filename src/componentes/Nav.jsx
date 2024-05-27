import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Favorito from './Favorito'
import { Context } from '../store/Appcontext';
const Nav = () => {


    const { store, actions } = useContext(Context);

  

    return (
        <div className='container-fluid '>
            <div className='row '>
                <div className='col-md-12 d-flex justify-content-center'>
                    <ul className="nav ">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Star Wars!</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Favorites
                            </a>
                            <ul className="dropdown-menu">
                                {store.favorites.length !== 0 ?  store.favorites.map((favorito, index) => {
                                    return <Favorito 
                                    name={favorito}
                                    key={index}
                                    id={index}
                                    deleteFav={(e) => actions.removeFavorite(e, favorito)}
                                    
                                    />}
                                ) : <h6 className='ms-3 mt-1'>Empty...</h6>}
                            </ul>
                        </li>


                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Nav