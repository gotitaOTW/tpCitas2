import React from "react";

function MostrarCita(props){
    return(
        <div className="cita">
              <p>Mascota: <span>{props.mascota}</span></p>
              <p>Dueño: <span>{props.duenio}</span></p>
              <p>Fecha: <span>{props.fecha}</span></p>
              <p>Hora: <span>{props.hora}</span></p>
              <p>Sintomas: <span>{props.sintomas}</span></p><button className="button elimnar u-full-width">Eliminar ×</button>
        </div>
    )
}
export default MostrarCita;