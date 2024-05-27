import React, { useContext, useEffect } from 'react';
import { Context } from '../store/Appcontext';
import Card from '../componentes/Card';
import '../styles/people.css'
import Cardplanet from '../componentes/Cardplanet'
import Cardvehicle from '../componentes/Cardvehicle'


const People = () => {
    const { store, actions } = useContext(Context);



    // const handleCharacter = async (id) =>  {
    //     try {
    //         const url = `https://www.swapi.tech/api/people/${id}`;
    //         const options = {
    //             method: "GET",
    //             headers: { 'Content-Type': 'application/json' }
    //         }

    //         const response = await fetch(url, options)
    //         const datos = await response.json()
    //         const store = getStore();
    //         setStore({...store, characters: datos })
    //         console.log("Personajes obtenidos")
    //     } catch (error) {
    //         console.log(error.message)
    //     }
    // }

    // const handleVehicle = async (id) =>  {
    //     try {
    //         const url = `https://www.swapi.tech/api/vehicles/${id}`;
    //         const options = {
    //             method: "GET",
    //             headers: { 'Content-Type': 'application/json' }
    //         }

    //         const response = await fetch(url, options)
    //         const datos = await response.json()
    //         const store = getStore();
    //         setStore({...store, characters: datos })
    //         console.log("Personajes obtenidos")
    //     } catch (error) {
    //         console.log(error.message)
    //     }
    // }

    // const handlePlanet = async (id) =>  {
    //     try {
    //         const url = `https://www.swapi.tech/api/planets/${id}`;
    //         const options = {
    //             method: "GET",
    //             headers: { 'Content-Type': 'application/json' }
    //         }

    //         const response = await fetch(url, options)
    //         const datos = await response.json()
    //         const store = getStore();
    //         setStore({...store, characters: datos })
    //         console.log("Personajes obtenidos")
    //     } catch (error) {
    //         console.log(error.message)
    //     }
    // }



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
                            moreInfo={() => {actions.handleCharacter(personaje.uid)}}
                            description="A person within the Star Wars universe"
                            favorito={() => actions.setFavorite(personaje.name)}
                            deleteFav={(e) => actions.removeFavorite(e, personaje.name)}
                        />
                    )) : <h4>loading</h4>}
                </div>
            </div>

            <h2 className='ms-3'>Vehicles</h2>
            <div className='row'>
                <div className='col-12 scroll-container'>
                    {store.vehicles.results ? store.vehicles.results.map((vehicle) => (
                        <Cardvehicle
                            name={vehicle.name}
                            id={vehicle.uid}
                            key={vehicle.uid}
                            moreInfo={() => {actions.handleVehicle(vehicle.uid)}}
                            description="A Vehicle within the Star Wars universe"
                            favorito={() => actions.setFavorite(vehicle.name)}
                            deleteFav={(e) => actions.removeFavorite(e, vehicle.name)}
                        />
                    )) : <h4>loading</h4>}
                </div>
            </div>

            <h2 className='m-3'>Planets</h2>
            <div className='row'>
                <div className='col-12 scroll-container'>
                    {store.planets.results ? store.planets.results.map((planet) => (
                        <Cardplanet
                            name={planet.name}
                            id={planet.uid}
                            key={planet.uid}
                            moreInfo={() => {actions.handlePlanet(planet.uid)}}
                            description="A planet within the Star Wars universe"
                            favorito={() => actions.setFavorite(planet.name)}
                            deleteFav={(e) => actions.removeFavorite(e, planet.name)}
                            
                        />
                    )) : <h4>loading</h4>}
                </div>
            </div>
        </div>
        </div>
    );
};

export default People;
