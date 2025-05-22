import {useEffect, useState} from "react"
import { useNavigate, useLocation } from "react-router-dom"

const EditarPresidente = async () => {
    const navigate= useNavigate()
    const location= useLocation()

    const [dni,setDni] = useState<number>(0)
    const [nombrepresi, setNombrepresi] = useState<string>('')
    const [mensaje,setMensaje] = useState<string>('')
    const ids=location.state
    useEffect(()=>{
        mostrarPresidente()
    },[])
    const mostrarPresidente = async () => {
        console.log(ids)
        const respuesta = fetch (`http://localhost:4545/${ids}`)
        const obj=(await respuesta).json()
        console.log(obj.id)
        setDni(obj.id)
        setNombrepresi(obj.id)
       
    }

    const actualiza = async () => {
        const msj = await fetch('link out', {
            method: 'PUT',
            headers: {
                'Content-Type':'application/json',
            },
            body:JSON.stringify({dni,nombrepresi})
        })
        const mensaje=await msj.json()
        setMensaje(mensaje.mensaje)
        navigate('/listar')
    }

    return (
        <div>
            <input type='text' value={dni}></input>
            <input type='text' value={nombrepresi} onChange={(event)=>setNombrepresi(event.target.value)}></input>
             <button onClick={actualiza}>Actualizar</button>
              <p>{mensaje}</p>
        </div>
    )

}

export default EditarPresidente