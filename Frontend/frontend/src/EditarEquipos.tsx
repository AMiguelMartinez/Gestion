import {useEffect, useState} from "react"
import { useNavigate, useLocation } from "react-router-dom"

const EditarEquipos = async () => {
    const navigate= useNavigate()
    const location= useLocation()

    const [codigo,setCodigo] = useState<number>(0)
    const [nombre, setNombre] = useState<string>('')
    const [mensaje,setMensaje] = useState<string>('')
    const [anio_fundacion, setAnio_fundacion] = useState<string>('')
    const ids=location.state
    useEffect(()=>{
        mostrarEquipo()
    },[])
    const mostrarEquipo = async () => {
        console.log(ids)
        const respuesta = fetch (`http://localhost:4545/${ids}`)
        const obj=(await respuesta).json()
        console.log(obj.id)
        setCodigo(obj.id)
        setNombre(obj.id)
        setAnio_fundacion(obj.id)
    }

    const actualizar = async () => {
        const msj = await fetch('http://localhost:4545/put', {
            method: 'PUT',
            headers: {
                'Content-Type':'application/json',
            },
            body:JSON.stringify({nombre,anio_fundacion})
        })
        const mensaje=await msj.json()
        setMensaje(mensaje.mensaje)
        navigate('/listar')
    }

    return (
        <div>
            <input type='text' value={codigo}></input>
            <input type='text' value={nombre} onChange={(event)=>setNombre(event.target.value)}></input>
            <input type='text' value={anio_fundacion} onChange={(event)=>setAnio_fundacion(event.target.value)}></input>
             <button onClick={actualizar}>Actualizar</button>
              <p>{mensaje}</p>
        </div>
    )

}

export default EditarEquipos
