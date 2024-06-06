import React, { useContext } from 'react'
import Detailcharacter from '../componentes/Detailcharacter'
import { Context } from '../store/Appcontext';
const Personajes = () => {


  const { store, actions } = useContext(Context);

  return (
    <div>
      <Detailcharacter 
      name={store.character.result ? store.character.result.properties.name : <p>loading...</p>}
      gender={store.character.result ? store.character.result.properties.gender : <p>loading...</p>}
      birth={store.character.result ? store.character.result.properties.birth_year : <p>loading...</p>}
      eyecolor={store.character.result ? store.character.result.properties.eye_color : <p>loading...</p>}
      skincolor={store.character.result ? store.character.result.properties.skin_color : <p>loading...</p>}
      haircolor={store.character.result ? store.character.result.properties.hair_color : <p>loading...</p>}
      mass={store.character.result ? store.character.result.properties.mass : <p>loading...</p>}
      height={store.character.result ? store.character.result.properties.height : <p>loading...</p>}

      />
    </div>
  )
}

export default Personajes