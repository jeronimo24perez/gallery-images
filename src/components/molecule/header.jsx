import { Link } from "react-router-dom"
import Title from "../atom/title"

const Header = ()=>{
    return(
        <>
            <header className="bg-green-700">
                <Link to='/' ><Title text='Galeria de imagenes JP' /></Link>
            </header>               
        </>
    )
}

export default Header