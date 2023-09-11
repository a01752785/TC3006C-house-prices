/**
 * This file contains a form to interact with the house pricing ML model.
 * Author: David Damian Galan
 * Date: Sep 10, 2023
 */

import { useState } from "react";

import "../styles/HousePriceForm.css";

const HousePriceForm = () => {
  const [inputs, setInputs] = useState({});

  const inputChangeHandler = (event) => {
    const name = event.target.name
    const value = event.target.value
    setInputs(values => ({...values, [name]: Number(value)}))
  };

  const onSubmitFormHandler = async (event) => {
    event.preventDefault()
    const response = await fetch("http://localhost:5000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs)
    }).then(async (response) => {
        const data = await response.json();
        return data;
    });
    alert("El precio de su propiedad es de $"
          + response.predicted_price.toFixed(2) + " USD")
  };

  return <form className="house-value-form" onSubmit={onSubmitFormHandler}>
    <label>Área del lote (pies cuadrados):</label>
    <input
    className="house-value-form-input"
    type="number"
    step="0.01"
    placeholder="Introduzca el valor"
    name="lot_area"
    onChange={inputChangeHandler}
    />

    <label>Calidad del material de construción (1 al 10):</label>
    <input
    className="house-value-form-input"
    type="number"
    placeholder="Introduzca el valor"
    name="overall_quality"
    onChange={inputChangeHandler}
    />

    <label>Estado de la casa (1 al 10):</label>
    <input
    className="house-value-form-input"
    type="number"
    placeholder="Introduzca el valor"
    name="overall_cond"
    onChange={inputChangeHandler}
    />

    <label>Año en que se construyó la casa:</label>
    <input
    className="house-value-form-input"
    type="number"
    placeholder="Introduzca el valor"
    name="year_built"
    onChange={inputChangeHandler}
    />

    <label>Año de última remodelación:</label>
    <label> (mismo año en que se construyó si no aplica)</label>
    <input
    className="house-value-form-input"
    type="number"
    placeholder="Introduzca el valor"
    name="year_remod_add"
    onChange={inputChangeHandler}
    />

    <label>Área del primer sótano (pies cuadrados):</label>
    <input
    className="house-value-form-input"
    type="number"
    step="0.01"
    placeholder="Introduzca el valor"
    name="bsmt_finished_sf_1"
    onChange={inputChangeHandler}
    />

    <label>Área del segundo sótano (pies cuadrados):</label>
    <input
    className="house-value-form-input"
    type="number"
    step="0.01"
    placeholder="Introduzca el valor"
    name="bsmt_finished_sf_2"
    onChange={inputChangeHandler}
    />

    <label>Área del segundo piso (pies cuadrados):</label>
    <input
    className="house-value-form-input"
    type="number"
    step="0.01"
    placeholder="Introduzca el valor"
    name="second_floor_sf"
    onChange={inputChangeHandler}
    />

    <label>Área del inmueble por encima del nivel del piso</label>
    <label>(pies cuadrados):</label>
    <input
    className="house-value-form-input"
    type="number"
    step="0.01"
    placeholder="Introduzca el valor"
    name="above_grade_living_area_sf"
    onChange={inputChangeHandler}
    />

    <label>Cantidad de baños en el sótano:</label>
    <input
    className="house-value-form-input"
    type="number"
    placeholder="Introduzca el valor"
    name="bsmt_full_bath"
    onChange={inputChangeHandler}
    />

    <label>Cantidad de dormitorios (no sótano):</label>
    <input
    className="house-value-form-input"
    type="number"
    placeholder="Introduzca el valor"
    name="bedroom_above_grade"
    onChange={inputChangeHandler}
    />

    <label>Cantidad de habitaciones de cocina:</label>
    <input
    className="house-value-form-input"
    type="number"
    placeholder="Introduzca el valor"
    name="kitchen_above_grade"
    onChange={inputChangeHandler}
    />

    <label>Cantidad de chimeneas:</label>
    <input
    className="house-value-form-input"
    type="number"
    placeholder="Introduzca el valor"
    name="fireplaces"
    onChange={inputChangeHandler}
    />

    <label>Año de construcción del garage</label>
    <label>(0 si no tiene garage):</label>
    <input
    className="house-value-form-input"
    type="number"
    placeholder="Introduzca el valor"
    name="garage_year_built"
    onChange={inputChangeHandler}
    />

    <label>Cantidad de autos del garage:</label>
    <input
    className="house-value-form-input"
    type="number"
    placeholder="Introduzca el valor"
    name="garage_cars"
    onChange={inputChangeHandler}
    />

    <label>Área del garage (pies cuadrados):</label>
    <input
    className="house-value-form-input"
    type="number"
    step="0.01"
    placeholder="Introduzca el valor"
    name="garage_area"
    onChange={inputChangeHandler}
    /> 

    <button
    className="submit-button">Calcular Precio</button>
  </form>;
};

export default HousePriceForm;
