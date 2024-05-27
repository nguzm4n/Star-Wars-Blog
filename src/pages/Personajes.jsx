import React, { useContext } from 'react'
import Detailcharacter from '../componentes/Detailcharacter'
import { Context } from '../store/Appcontext';
const Personajes = () => {


  const { store, actions } = useContext(Context);

  return (
    <div>
      <Detailcharacter 
      name={store.character.result ? store.character.result.properties.name : <h3>loading...</h3>}
      gender={store.character.result ? store.character.result.properties.gender : <h3>loading...</h3>}
      birth={store.character.result ? store.character.result.properties.birth_year : <h3>loading...</h3>}
      eyecolor={store.character.result ? store.character.result.properties.eye_color : <h3>loading...</h3>}
      skincolor={store.character.result ? store.character.result.properties.skin_color : <h3>loading...</h3>}
      haircolor={store.character.result ? store.character.result.properties.hair_color : <h3>loading...</h3>}
      mass={store.character.result ? store.character.result.properties.mass : <h3>loading...</h3>}
      height={store.character.result ? store.character.result.properties.height : <h3>loading...</h3>}

      />
    </div>
  )
}

export default Personajes