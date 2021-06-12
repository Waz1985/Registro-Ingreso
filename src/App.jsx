import React, { useState } from "react";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Registro from "./components/Registro/Registro";


function App() {
  const [registro, setRegistro]= useState([]);
  const addRegistro = (registro) =>{
    setRegistro((registroViejo)=>([...registroViejo, registro]))
  }

  return (
    <>
     <Header/> 
     <Form addIngreso={addRegistro}/>
     <Registro registro={registro} />
    </>
  );
}

export default App;
