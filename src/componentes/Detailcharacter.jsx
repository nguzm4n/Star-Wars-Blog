import React from 'react'
import images from '../Images/images.png'
import wall from '../Images/wall.jpg'

const Detailcharacter = ({ name, gender, birth, eyecolor, skincolor, haircolor, mass, height }) => {



    return (
        <div className='d-flex justify-content-center mt-5'>
            <div className="card mb-3" style={{ maxWidth: "800px" }}>
                <div className="row g-0 ">
                    <div className="col-md-4">
                        <img src={wall} className="img-fluid rounded-start" alt="..." style={{ width: "800px" }} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title ms-3">Name: <br></br> {name}</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Gender: {gender}</li>
                                <li className="list-group-item">Birth Year: {birth}</li>
                                <li className="list-group-item">Eye Color: {eyecolor}</li>
                                <li className="list-group-item">Skin Color: {skincolor}</li>
                                <li className="list-group-item">Hair Color: {haircolor}</li>
                                <li className="list-group-item">Mass: {mass}</li>
                                <li className="list-group-item">Height:{height}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detailcharacter