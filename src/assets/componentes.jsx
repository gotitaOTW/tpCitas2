import React, { useState } from "react";
//import { useState } from "react";

function MostrarForm({ props}) {
    const [campos, SetCampos]=useState({
        input1:null,
        input2:null,
        input3:null,
        input4:null,
        input5:null,
    });
    let evento;

    const validarCampos = () =>{
        let todosValidos=true;
        for (let atributo in campos) {
            if (campos[atributo] != null) {
                todosValidos = false; 
              break;
            }
          }
          return todosValidos;
    }

    const validarForm = (e) =>{
        e.preventDefault;
        if(!validarCampos){//algo mal ingresafdo
            document.getElementById("mensajeError").textContent="Todos los ingresos deben ser válidos";
        }else{
            document.getElementById("mensajeError").textContent="";
            props.usoLosDatos(campos);//hay q desarrollar una funcion que reciba campos y los use (los mete al listado de citas para q luego <listadoCitas /> muestre el listado. para eso va a necesitar el componente <Cita /> q recibe los datos y devuelve una card de html linda con los datos metidos). Luego hay q mandarle el nombre de esa funcion.
        }
    }

    const validarCampo = (id,contenido=null) => SetCampos({...campos,[id]:contenido})

    const validarTexto=(event)=>{
        evento=event.target;
        let id=evento.id;

        if(evento.trim()!=""){
            validarCampo(id,evento.value);//guardo el valor si esta bien
        }
        else{
            validarCampo(id);//guardo null si está mal
        }
    }

    const validarFecha=(e)=>{
        evento=e.target;
        const regex = /^(?:19|20)\d\d-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12][0-9]|3[01])$/;

        if(regex.test(evento.value)){
            validarCampo(evento.id,evento.value);
        }
        else{
            validarCampo(evento.id);
        }
    }

    return (

        <div>
            <h2>{props.titulo}</h2>
            <form onSubmit={validarForm}>
                <label>{props.inputText1}</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder={props.inputText1}
                    onChange={validarTexto}
                    id="input1"
                />
                <label>{props.inputText2}</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder={props.inputText2}
                    onChange={validarTexto}
                    id="input2"
                />
                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    id="input3"
                    onChange={validarFecha}

                />
                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    id="input4"
                    onChange={(e)=>validarCampo(e.target.id,e.target.value)}
                />
                <label>{props.inputText3}</label>
                <textarea
                    name="sintomas"
                    className="u-full-width"
                    onChange={validarTexto}
                    id="input5"
                ></textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >
                    {props.submit}
                </button>
                <p id="mensajeError" className="alerta-error"></p>
            </form>
        </div>
    );
}



export default MostrarForm;
