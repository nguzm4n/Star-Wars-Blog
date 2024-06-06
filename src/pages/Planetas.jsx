import React, { useContext } from 'react'
import Detailplanet from '../componentes/Detailplanet'
import { Context } from '../store/Appcontext';

const Planetas = () => {


  const { store, actions } = useContext(Context);


  return (
    <div>
      <Detailplanet
      name={store.planet.result ? store.planet.result.properties.name : <p>loading...</p>}
      surface={store.planet.result ? store.planet.result.properties.surface_water : <p>loading...</p>}
      terrain={store.planet.result ? store.planet.result.properties.terrain : <p>loading...</p>}
      climate={store.planet.result ? store.planet.result.properties.climate : <p>loading...</p>}
      population={store.planet.result ? store.planet.result.properties.population : <p>loading...</p>}
      gravity={store.planet.result ? store.planet.result.properties.gravity : <p>loading...</p>}
      orbitalp={store.planet.result ? store.planet.result.properties.orbital_period : <p>loading...</p>}
      rotationp={store.planet.result ? store.planet.result.properties.rotation_period : <p>loading...</p>}
      diameter={store.planet.result ? store.planet.result.properties.diameter : <p>loading...</p>}
      
      
      
      />
    </div>
  )
}

export default Planetas