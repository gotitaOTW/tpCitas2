import React from "react";

function MostrarForm({ titulo, inputText1, inputText2, inputText3, submit}) {
    return (
        <div>
            <h2>{titulo}</h2>
            <form>
                <label>{inputText1}</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder={inputText1}
                />
                <label>{inputText2}</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder={inputText2}
                />
                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                />
                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                />
                <label>{inputText3}</label>
                <textarea
                    name="sintomas"
                    className="u-full-width"
                ></textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >
                    {submit}
                </button>
            </form>
        </div>
    );
}



export default MostrarForm;
