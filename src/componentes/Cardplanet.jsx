import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router-dom'


const Card = ({name, moreInfo, description}) => {
    return (
        <div>
            <div className="card my-2 mx-3" style={{width: '18rem'}}>
                <img src="" className="card-img-top" alt=""/>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{description}</p>
                        <Link to="/planet" className="btn btn-primary me-5" onClick={moreInfo} >Learn More</Link>     <FaRegHeart className='ms-5'  onClick={moreInfo}/>
                    </div>
            </div>
        </div>
    )
}

export default Card