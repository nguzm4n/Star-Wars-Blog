import React, { useContext, useEffect } from 'react'
import Characters from '../componentes/Characters'
import { Context } from '../store/Appcontext'

const Home = () => {


  const { store, actions } = useContext(Context)

  useEffect(() => {
        
    
}, [])
  return (
    <div>Home

        <Characters />
    </div>
  )
}

export default Home