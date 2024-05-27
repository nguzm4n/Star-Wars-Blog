const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            characters: {},
            planets: {},
            vehicles: {},
            character:{},
            planet: {},
            vehicle:{},
            favorites: []
            

        },
        actions: {
            getCharacters: async () => {

                
                try {
                    const url = "https://www.swapi.tech/api/people/";
                    const options = {
                        method: "GET",
                        headers: { 'Content-Type': 'application/json' }
                    }

                    const response = await fetch(url, options)
                    const datos = await response.json()
                    const store = getStore();
                    setStore({...store, characters: datos })
                    console.log("Personajes obtenidos")
                } catch (error) {
                    console.log(error.message)
                }

            },
            getVehicles: async () => {

                
                try {
                    const url = "https://www.swapi.tech/api/vehicles/";
                    const options = {
                        method: "GET",
                        headers: { 'Content-Type': 'application/json' }
                    }

                    const response = await fetch(url, options)
                    const datos = await response.json()
                    const store = getStore();
                    setStore({ ...store, vehicles: datos })
                    console.log("Vehiculos obtenidos")
                } catch (error) {
                    console.log(error.message)
                }

            },
            getPlanets: async () => {

                
                try {
                    const url = "https://www.swapi.tech/api/planets/";
                    const options = {
                        method: "GET",
                        headers: { 'Content-Type': 'application/json' }
                    }

                    const response = await fetch(url, options)
                    const datos = await response.json()
                    const store = getStore();
                    setStore({ ...store, planets: datos })
                    console.log("Planetas obtenidos")
                } catch (error) {
                    console.log(error.message)
                }

            },
             handleCharacter: async (id) =>  {
                try {
                    const url = `https://www.swapi.tech/api/people/${id}`;
                    const options = {
                        method: "GET",
                        headers: { 'Content-Type': 'application/json' }
                    }
        
                    const response = await fetch(url, options)
                    const datos = await response.json()
                    const store = getStore();
                    setStore({...store, character: datos })
                    console.log("Personaje obtenidos")
                } catch (error) {
                    console.log(error.message)
                }
            },

            handleVehicle: async (id) =>  {
                try {
                    const url = `https://www.swapi.tech/api/vehicles/${id}`;
                    const options = {
                        method: "GET",
                        headers: { 'Content-Type': 'application/json' }
                    }
        
                    const response = await fetch(url, options)
                    const datos = await response.json()
                    const store = getStore();
                    setStore({...store, vehicle: datos })
                    console.log("Vehiculo obtenidos")
                } catch (error) {
                    console.log(error.message)
                }
            },

            handlePlanet: async (id) =>  {
                try {
                    const url = `https://www.swapi.tech/api/planets/${id}`;
                    const options = {
                        method: "GET",
                        headers: { 'Content-Type': 'application/json' }
                    }
        
                    const response = await fetch(url, options)
                    const datos = await response.json()
                    const store = getStore();
                    setStore({...store, planet: datos })
                    console.log("Planeta obtenidos")
                } catch (error) {
                    console.log(error.message)
                }
            },

            setFavorite: (name) => {
                const store = getStore();
                setStore({...store })
                if (!store.favorites.includes(name)) {
                    store.favorites.push(name);
                }
                console.log("agregado a favoritos")
            },

            removeFavorite: (event, name) => {
                event.stopPropagation() 
                const store = getStore();
                
            
                const updatedFavorites = store.favorites.filter(favorite => favorite !== name);
                setStore({ favorites: updatedFavorites });
            },

        }
    }
}



export default getState