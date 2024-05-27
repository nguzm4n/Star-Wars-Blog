import React from 'react'
import images from '../Images/images.png'


const Detailcharacter = ({ name, consumable, cargocapacity, maxas, passengers, crew, length, cost, manufacturer, vehicleClass, model }) => {



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
                                <li className="list-group-item">Consumable: {consumable}</li>
                                <li className="list-group-item">Cargo Capacity: {cargocapacity}</li>
                                <li className="list-group-item">Max Atmosphering Speed: {maxas}</li>
                                <li className="list-group-item">Passengers: {passengers}</li>
                                <li className="list-group-item"> Crew: {crew}</li>
                                <li className="list-group-item">Length: {length}</li>
                                <li className="list-group-item">Cost in Credits: {cost}</li>
                                <li className="list-group-item">Manufacturer: {manufacturer}</li>
                                <li className="list-group-item">Vehicle Class: {vehicleClass}</li>
                                <li className="list-group-item">Model: {model}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detailcharacter