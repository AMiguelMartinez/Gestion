import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Titulo from "../components/Titulo";
import EditarEquipos from "./EditarEquipos";
import FormularioEquipo from "./FormularioEquipo";
import ListaEquipos from "./ListaEquipos";

const App: React.FC = () => {
  return (
    <div>
      <Titulo text= "Lista de equipos" color="blue" size="32"/>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element = {<FormularioEquipo></FormularioEquipo>}></Route>
           <Route path="/listar" element = {<ListaEquipos></ListaEquipos>}></Route>
            <Route path="/actualizar" element = {<EditarEquipos></EditarEquipos>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
