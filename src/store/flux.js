const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            characters: {}

        },
        actions: {
            getCharacters: async () => {

                
                try {
                    const url = "https://www.swapi.tech/api/planets/1/";
                    const options = {
                        method: "GET",
                        headers: { 'Content-Type': 'application/json' }
                    }

                    const response = await fetch(url, options)
                    const datos = await response.json()
                    setStore({ characters: datos })
                    console.log("datos obtenidos")
                } catch (error) {
                    console.log(error.message)
                }

            }

        }
    }
}



export default getState