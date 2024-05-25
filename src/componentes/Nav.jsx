import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <div className='row'>
                <div className='col-md-12 d-flex justify-content-center'>
                    <ul className="nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Star Wars!</Link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Favorites
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>


                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Nav