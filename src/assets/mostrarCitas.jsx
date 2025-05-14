import React from "react";

function MostrarCitas({titulo}){
    return(
        <div>
        <h2>{titulo}</h2>
            <div className="cita">
              <p>Mascota: <span>Nina</span></p>
              <p>Dueño: <span>Martin</span></p>
              <p>Fecha: <span>2021-08-05</span></p>
              <p>Hora: <span>08:20</span></p>
              <p>Sintomas: <span>Le duele la pierna</span></p><button className="button elimnar u-full-width">Eliminar ×</button>
            </div>
            <div className="cita">
              <p>Mascota: <span>Sifon</span></p>
              <p>Dueño: <span>Flecha</span></p>
              <p>Fecha: <span>2023-08-05</span></p>
              <p>Hora: <span>09:24</span></p>
              <p>Sintomas: <span>Duerme mucho</span></p><button className="button elimnar u-full-width">Eliminar ×</button>
            </div>
            <div className="cita">
              <p>Mascota: <span>Floki</span></p>
              <p>Dueño: <span>Ari</span></p>
              <p>Fecha: <span>2023-08-05</span></p>
              <p>Hora: <span>16:15</span></p>
              <p>Sintomas: <span>No está comiendo</span></p><button className="button elimnar u-full-width">Eliminar ×</button>
            </div>
        </div>
    )   
}

export default MostrarCitas;