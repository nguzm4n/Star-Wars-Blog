import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router-dom'


const Card = ({name, onclick}) => {
    return (
        <div>
            <div className="card my-2 mx-3" style={{width: '18rem'}}>
                <img src="" className="card-img-top" alt=""/>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link href="#" className="btn btn-primary me-5">Learn More</Link>     <FaRegHeart className='ms-5'  onClick={() => {}}/>
                    </div>
            </div>
        </div>
    )
}

export default Card