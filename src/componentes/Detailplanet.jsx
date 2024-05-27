import React from 'react'
import images from '../Images/images.png'


const Detailcharacter = ({ name, surface, terrain, climate, population, gravity, orbitalp, rotationp, diameter }) => {



    return (
        <div className='d-flex justify-content-center mt-5'>
            <div className="card mb-3" style={{ maxWidth: "800px" }}>
                <div className="row g-0 ">
                    <div className="col-md-4">
                        <img src={images} className="img-fluid rounded-start" alt="..." style={{ width: "800px" }} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title ms-3">Name: <br></br> {name}</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Surface: {surface}</li>
                                <li className="list-group-item">Terrain: {terrain}</li>
                                <li className="list-group-item">Climate: {climate}</li>
                                <li className="list-group-item">Population: {population}</li>
                                <li className="list-group-item">Gravity: {gravity}</li>
                                <li className="list-group-item">Orbital Period: {orbitalp}</li>
                                <li className="list-group-item">Rotation Period: {rotationp}</li>
                                <li className="list-group-item">Diameter: {diameter}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detailcharacter