import { useState } from "react";

const FormularioEquipo: React.FC = () => {
    const [codigo,setCodigo] = useState <number> (0)
    const [nombre,setNombre] = useState <string> ('')
    const [anion_fundacion,setAnio_fundacion] =useState <string> ('')
    const [mensaje,setMensaje] =useState<string>('')
    const guardarEquipos = async () => {
       const respuesta = await fetch ('//aqui va el link del adonis', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify({codigo:codigo,nombre:nombre,anion_fundacion:anion_fundacion})
    })
    const msj = await respuesta.json()
    setMensaje(msj.mensaje)
    console.log(msj.mensaje)
}
    return (
     <div>
        <h1>CREACION EDITORIALES</h1>
         <label>Codigo</label>
        <input type="text" onChange={(event)=>setCodigo(parseInt(event.target.value))} placeholder="Escriba Nombre"></input>
        <label>Nombre</label>
        <input type="text" onChange={(event)=>setNombre(event.target.value)} placeholder="Escriba Nombre"></input>
        <label>Año de fundacion</label>
        <input type="text" onChange={(event)=>setAnio_fundacion(event.target.value)} placeholder="Escriba Nombre"></input>
        <button onClick={guardarEquipos}>Guardar</button>
        <h1>{mensaje}</h1>
    </div>
    )
}
export default FormularioEquipo