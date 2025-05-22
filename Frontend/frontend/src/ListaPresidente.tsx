import {useEffect, useState} from "react"
import {useNavigate} from "react-router-dom"

interface Presidentes {
    dni:number
    nombrepresidente:string
    
}

const ListaEquipos:React.FC = () => {
    const navigate=useNavigate()
    const [presidente,setPresidente] = useState<Presidentes[]>([])
    const lista = async ()  => {
        const resp= await fetch('link')
        const datos=await resp.json()
        console.log(datos)
        setPresidente(datos)
    }

    const elimina=async (ide:number) => {
        const respE=await fetch ('`link y el /${ide}`', {
            method: 'DELETE'
        })
        const msjE =await respE.json()
        console.log(msjE)
        lista()
    }
    const actualizarpresi = (dni:number) => {
        alert(dni)
        navigate('/actualizarpresi', {state:dni})
    }
    useEffect(()=> {
        lista()
    },[])

    return (
        <div>
        <table>
            <thead>
                <tr>
                     <th>DNI</th>
                     <th>Nombre Presidente</th>
                </tr>
            </thead>

            <tbody>
                {
                    presidente.map((index)=>(
                        <tr>
                            <td>{index.dni}</td>
                             <td>{index.nombrepresidente}</td>
                              <td>
                                <button onClick={()=>elimina(index.dni)}>Eliminar</button>
                                 <button onClick={()=>actualizarpresi(index.dni)}>Actualizar</button>
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