import React, { useState } from "react";

const Form = (props) => {
  const [registro, setRegistro] = useState({
    name: "",
    apellido: "",
    telefono: "",
    id: "",
    direccion: "",
    horaIngreso: "",
  });

  const addNameHandler = (event) => {
    setRegistro((stateViejo) => ({ ...stateViejo, name: event.target.value }));
  };

  const addApellidoHandler = (event) => {
    setRegistro((stateViejo) => ({ ...stateViejo, apellido: event.target.value }));
  };
  const addTelefonoHandler = (event) => {
    setRegistro((stateViejo) => ({ ...stateViejo, telefono: event.target.value }));
  };
  const addIdHandler = (event) => {
    setRegistro((stateViejo) => ({ ...stateViejo, id: event.target.value }));
  };
  const addDireccionHandler = (event) => {
    setRegistro((stateViejo) => ({ ...stateViejo, direccion: event.target.value }));
  };

  const onIngresoRegistroHandler = () => {
      props.addIngreso({...registro,horaIngreso: new Date()});
      setRegistro ({
        name: "",
        apellido: "",
        telefono: "",
        id: "",
        direccion: "",
        horaIngreso: "",
      }) ;
  }
  

  return (
      <>
      <input type="text" onChange={addNameHandler} placeholder="Escriba su Nombre" value={registro.name} />
      <input type="text" onChange={addApellidoHandler} placeholder="Escriba su Apellido" value={registro.apellido} />
      <input type="text" onChange={addTelefonoHandler} placeholder="Escriba su Telefono" value={registro.telefono} />
      <input type="text" onChange={addIdHandler} placeholder="Escriba su numero de Cedula" value={registro.id} />
      <input type="text" onChange={addDireccionHandler} placeholder="Escriba su Direccion" value={registro.direccion} />
      <input type="button" value="Ingresar Registro" onClick={onIngresoRegistroHandler} />
      </>
  );
};
export default Form;
