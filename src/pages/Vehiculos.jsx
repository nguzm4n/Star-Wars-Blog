import React, { useContext } from 'react'
import Detailvehicle from '../componentes/Detailvehicle'
import { Context } from '../store/Appcontext';


const Vehiculos = () => {

  const { store, actions } = useContext(Context);
  return (
    <div>

      <Detailvehicle
      name={store.vehicle.result ? store.vehicle.result.properties.name : <h3>loading...</h3>}
      consumable={store.vehicle.result ? store.vehicle.result.properties.consumable : <h3>loading...</h3>}
      cargocapacity={store.vehicle.result ? store.vehicle.result.properties.cargo_capacity : <h3>loading...</h3>}
      maxas={store.vehicle.result ? store.vehicle.result.properties.max_atmosphering_speed : <h3>loading...</h3>}
      passengers={store.vehicle.result ? store.vehicle.result.properties.passengers : <h3>loading...</h3>}
      crew={store.vehicle.result ? store.vehicle.result.properties.crew : <h3>loading...</h3>}
      length={store.vehicle.result ? store.vehicle.result.properties.length : <h3>loading...</h3>}
      cost={store.vehicle.result ? store.vehicle.result.properties.cost_in_credits : <h3>loading...</h3>}
      manufacturer={store.vehicle.result ? store.vehicle.result.properties.manufacturer : <h3>loading...</h3>}
      vehicleClass={store.vehicle.result ? store.vehicle.result.properties.vehicle_class : <h3>loading...</h3>}
      model={store.vehicle.result ? store.vehicle.result.properties.model : <h3>loading...</h3>}
      
      
      />
    </div>
  )
}

export default Vehiculos