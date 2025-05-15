import React from "react";

function MostrarCitas(props){
  let citasTotales=<></>;
  props.citas.forEach(cita =>{
    citasTotales+=props.traerCita(cita);
  });
    return citasTotales;
}

export default MostrarCitas;