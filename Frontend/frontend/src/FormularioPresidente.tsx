import { useState } from "react";

const FormularioPresidente: React.FC = () => {
    const [dni,setDni] = useState <number> (0)
    const [nombre,setNombre] = useState <string> ('')
    const [mensaje,setMensaje] =useState <string> ('')
    const guardarEditorial = async () => {
       const respuesta = await fetch ('//aqui va el link del adonis', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify({dni:dni,nombre:nombre})
    })
    const mensajecito = await respuesta.json()
    setMensaje(mensajecito.mensaje)
    console.log(mensajecito.mensaje)
}
    return (
     <div>
        <h1>CREACION Presidentes</h1>
        <label>DNI</label>
        <input type="text" onChange={(event)=>setDni(parseInt(event.target.value))} placeholder="Escriba Nombre"></input>
        <label>Nombre</label>
        <input type="text" onChange={(event)=>setNombre(event.target.value)} placeholder="Escriba Nombre"></input>
        <button onClick={guardarEditorial}>Guardar</button>
        <h1>{mensaje}</h1>
    </div>
    )
}
export default FormularioPresidente;