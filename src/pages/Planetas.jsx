import React, { useContext } from 'react'
import Detailplanet from '../componentes/Detailplanet'
import { Context } from '../store/Appcontext';

const Planetas = () => {


  const { store, actions } = useContext(Context);


  return (
    <div>
      <Detailplanet
      name={store.planet.result ? store.planet.result.properties.name : <h3>loading...</h3>}
      surface={store.planet.result ? store.planet.result.properties.surface_water : <h3>loading...</h3>}
      terrain={store.planet.result ? store.planet.result.properties.terrain : <h3>loading...</h3>}
      climate={store.planet.result ? store.planet.result.properties.climate : <h3>loading...</h3>}
      population={store.planet.result ? store.planet.result.properties.population : <h3>loading...</h3>}
      gravity={store.planet.result ? store.planet.result.properties.gravity : <h3>loading...</h3>}
      orbitalp={store.planet.result ? store.planet.result.properties.orbital_period : <h3>loading...</h3>}
      rotationp={store.planet.result ? store.planet.result.properties.rotation_period : <h3>loading...</h3>}
      diameter={store.planet.result ? store.planet.result.properties.diameter : <h3>loading...</h3>}
      
      
      
      />
    </div>
  )
}

export default Planetas