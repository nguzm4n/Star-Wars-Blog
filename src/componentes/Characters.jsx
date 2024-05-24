import React, { useContext, useEffect } from 'react'
import { Context } from '../store/Appcontext'

const Characters = () => {

    const {store, actions} = useContext(Context)


    const handleCharacters = () => {
        actions.getCharacters()
    }
    

    const personajes = () => {

    }
    



  return (
    <div>Characters
        <button onClick={handleCharacters}>CLICK HERE</button>

    </div>
  )
}

export default Characters