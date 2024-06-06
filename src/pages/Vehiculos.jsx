import React, { useContext } from 'react'
import Detailvehicle from '../componentes/Detailvehicle'
import { Context } from '../store/Appcontext';


const Vehiculos = () => {

  const { store, actions } = useContext(Context);
  return (
    <div>

      <Detailvehicle
      name={store.vehicle.result ? store.vehicle.result.properties.name : <p>loading...</p>}
      consumable={store.vehicle.result ? store.vehicle.result.properties.consumable : <p>loading...</p>}
      cargocapacity={store.vehicle.result ? store.vehicle.result.properties.cargo_capacity : <p>loading...</p>}
      maxas={store.vehicle.result ? store.vehicle.result.properties.max_atmosphering_speed : <p>loading...</p>}
      passengers={store.vehicle.result ? store.vehicle.result.properties.passengers : <p>loading...</p>}
      crew={store.vehicle.result ? store.vehicle.result.properties.crew : <p>loading...</p>}
      length={store.vehicle.result ? store.vehicle.result.properties.length : <p>loading...</p>}
      cost={store.vehicle.result ? store.vehicle.result.properties.cost_in_credits : <p>loading...</p>}
      manufacturer={store.vehicle.result ? store.vehicle.result.properties.manufacturer : <p>loading...</p>}
      vehicleClass={store.vehicle.result ? store.vehicle.result.properties.vehicle_class : <p>loading...</p>}
      model={store.vehicle.result ? store.vehicle.result.properties.model : <p>loading...</p>}
      
      
      />
    </div>
  )
}

export default Vehiculos