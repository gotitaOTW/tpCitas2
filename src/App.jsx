import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import './ajaxlibs.css'
import MostrarForm from './assets/componentes.jsx'
import MostrarCitas from './assets/mostrarCitas.jsx'
import MostrarCita from './assets/citas.jsx'

function App() {
  return (
    <>
           <h1>ADMINISTRADOR DE CITAS</h1> 
           <div id="root">
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <MostrarForm titulo="Inscripcion" inputText1="Nombre" inputText2="Apellido" inputText3="Descripción" submit="Inscribirse"/> 
           </div>
          <div className="one-half column">
            <h2>Citas</h2>
            <MostrarCita num={2}/>  
            <MostrarCita num={1}/>
            <MostrarCita num={2}/>
          </div>
        </div>
      </div>
    </div>
    <script src="/static/js/bundle.js"></script>
    <script src="/static/js/vendors~main.chunk.js"></script>
    <script src="/static/js/main.chunk.js"></script>
    </>
  )
}

export default App
