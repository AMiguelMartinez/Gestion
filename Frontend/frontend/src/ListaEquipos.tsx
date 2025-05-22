import {useEffect, useState} from "react"
import {useNavigate} from "react-router-dom"

interface Equipos {
    codigo:number
    nombre:string
    anio_fundacion:number
}

const ListaEquipos:React.FC = () => {
    const navigate=useNavigate()
    const [equipos,setEquipos] = useState<Equipos[]>([])
    const lista = async ()  => {
        const resp= await fetch('link')
        const datos=await resp.json()
        console.log(datos)
        setEquipos(datos)
    }

    const eliminar=async (id:number) => {
        const respE=await fetch (`link y el /${id}`, {
            method: 'DELETE'
        })
        const msjE =await respE.json()
        console.log(msjE)
        lista()
    }
    const actualizar = (ids:number) => {
        alert(ids)
        navigate('/actualizar', {state:ids})
    }
    useEffect(()=> {
        lista()
    },[])

    return (
        <div>
        <table>
            <thead>
                <tr>
                     <th>Codigo</th>
                     <th>Nombre</th>
                     <th>Año de fundacion</th>
                </tr>
            </thead>

            <tbody>
                {
                    equipos.map((index)=>(
                        <tr>
                            <td>{index.codigo}</td>
                             <td>{index.nombre}</td>
                              <td>{index.anio_fundacion}</td>
                              <td>
                                <button onClick={()=>eliminar(index.codigo)}>Eliminar</button>
                                 <button onClick={()=>actualizar(index.codigo)}>Actualizar</button>
                              </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        </div>
    )
}
export default ListaEquipos