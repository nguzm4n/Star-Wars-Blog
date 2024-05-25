import React, { useContext, useEffect } from 'react';
import { Context } from '../store/Appcontext';
import Card from '../componentes/Card';
import '../styles/people.css'

const People = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getCharacters();
        actions.getVehicles();
        actions.getPlanets();
    }, []);

    return (
        <div>
            <div className='container-fluid'>
            <h2 className='ms-3'>Characters</h2>
            
            <div className='row'>
                <div className='col-12 scroll-container'>
                    {store.characters.results ? store.characters.results.map((personaje) => (
                        <Card
                            name={personaje.name}
                            id={personaje.uid}
                            key={personaje.uid}
                        />
                    )) : <h4>loading</h4>}
                </div>
            </div>

            <h2 className='ms-3'>Vehicles</h2>
            <div className='row'>
                <div className='col-12 scroll-container'>
                    {store.vehicles.results ? store.vehicles.results.map((vehicle) => (
                        <Card
                            name={vehicle.name}
                            id={vehicle.uid}
                            key={vehicle.uid}
                        />
                    )) : <h4>loading</h4>}
                </div>
            </div>

            <h2 className='m-3'>Planets</h2>
            <div className='row'>
                <div className='col-12 scroll-container'>
                    {store.planets.results ? store.planets.results.map((planet) => (
                        <Card
                            name={planet.name}
                            id={planet.uid}
                            key={planet.uid}
                        />
                    )) : <h4>loading</h4>}
                </div>
            </div>
        </div>
        </div>
    );
};

export default People;
