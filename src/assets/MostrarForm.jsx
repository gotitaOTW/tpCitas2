//queda arreglar el problema de ejecución: jessie, gpt o debugear. entendé por donde viene el error primero.



import React, { useState } from "react";
//import { useState } from "react";

function MostrarForm(props) {
    const [campos, SetCampos]=useState({
        mascota:null,
        duenio:null,
        fecha:null,
        hora:null,
        sintomas:null,
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
        if(!validarCampos){//algo mal ingresado
            document.getElementById("mensajeError").textContent="Todos los ingresos deben ser válidos";
        }else{
            document.getElementById("mensajeError").textContent="";
            props.usoLosDatos(campos);
        }
    }

    const validarCampo = (nombre,contenido) => SetCampos({...campos,[nombre]:contenido})

    const validarTexto=(event)=>{
        evento=event.target;
        let nombre=evento.name;
        console.log(nombre);

        if(evento.value.trim()!=""){
            validarCampo(nombre,evento.value);//guardo el valor si esta bien
        }
        else{
            validarCampo(nombre);//guardo null si está mal
        }
    }

    const validarFecha=(e)=>{
        evento=e.target;
        const regex = /^(?:19|20)\d\d-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12][0-9]|3[01])$/;

        if(regex.test(evento.value)){
            validarCampo(evento.name,evento.value);
        }
        else{
            validarCampo(evento.name);
        }
    }

    return (

        <div>
            <h2>Inscripción</h2>
            <form onSubmit={validarForm}>
                <label htmlFor="mascota">{props.inputText1}</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Ejemplo: Pichichus"
                    onChange={validarTexto}
                />
                <label htmlFor="duenio">{props.inputText2}</label>
                <input
                    type="text"
                    name="duenio"
                    className="u-full-width"
                    placeholder="Ejemplo: Mónica"
                    onChange={validarTexto}
                />
                <label htmlFor="fecha">{props.inputText3}</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={validarFecha}

                />
                <label htmlFor="hora">{props.inputText4}</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={(e)=>validarCampo(e.target.name,e.target.value)}
                />
                <label htmlFor="sintomas">{props.inputText5}</label>
                <textarea
                    name="sintomas"
                    className="u-full-width"
                    placeholder="Escriba aquí los síntomas de la mascota..."
                    onChange={validarTexto}
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
