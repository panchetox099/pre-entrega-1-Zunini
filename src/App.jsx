import React from 'react'
import NavBar from './componentes/NavBar'
import ItemListContainer from './componentes/ItemListContainer'


const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"Bienvenido a Nullaby"} />

    </div>
  )
}

export default App