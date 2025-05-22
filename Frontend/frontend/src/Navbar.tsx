import { Link } from "react-router-dom"

const Navbar: React.FC = () => {
    return (
        <nav>
            <Link to = "/"> crearEditorial </Link>
             <Link to = "/listar"> ListarEditorial  </Link>
        </nav>
    )
}
export default Navbar