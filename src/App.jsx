import { useState } from 'react'
import './App.css'
import './index.css'
import './ajaxlibs.css'
import MostrarForm from './assets/MostrarForm.jsx'
import MostrarCitas from './assets/MostrarCitas.jsx'
import MostrarCita from './assets/mostrarCita.jsx'

function App() {
  let citas = [];
  const agregarCitaAlListado = (cita) =>{
    citas.push(cita);
    console.log("ultima cita: "+cita.mascota)
  }


  return (
    <>
    <h1>ADMINISTRADOR DE CITAS</h1> 
           <div id="root">
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <MostrarForm usoLosDatos={agregarCitaAlListado}  inputText1="Nombre mascota" inputText2="Nombre dueño" inputText3="Fecha" inputText4="Hora" inputText5="Síntomas" submit="agendar cita"/> 
           </div>
          <div className="one-half column">
            <h2>Citas</h2>
            <MostrarCitas citas={citas} traerCita={MostrarCita}/>
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
