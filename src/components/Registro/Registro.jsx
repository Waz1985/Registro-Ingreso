const Registro = (props) => {
    
  return (
    <table style={{width:"100%"}}>
      <tr>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Telefono</th>
        <th>Cedula</th>
        <th>Direccion</th>
        <th>Hora Ingreso</th>
      </tr>
     {props.registro.map(registro=>
      <tr>
      <td>{registro.name}</td>
      <td>{registro.apellido}</td>
      <td>{registro.telefono}</td>
      <td>{registro.id}</td>
      <td>{registro.direccion}</td>
      <td>{registro.horaIngreso.toString()}</td>  
    </tr>
     )}
     
    </table>
  );
};
export default Registro;
