const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            characters: {},
            planets: {},
            vehicles: {}
            

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

            }

        }
    }
}



export default getState