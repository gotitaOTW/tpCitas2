import React from "react";

function MostrarCitas(props) {
  return props.citas.map(cita => (
    <div key={cita.id}>
      {props.traerCita(cita)}
    </div>
  ));
}

export default MostrarCitas;
