import arrowRight from '../../images/arrowR.png'
import arrowLeft from '../../images/arrowL.png'
import './arrow.css'
import { useParams } from "react-router-dom"

const Arrows = ()=>{
const params = useParams( )
const newParam = parseInt(params.id.slice(1))
    return(
        <>
        <div className="arrowRight arrow absolute rounded-lg p-2 w-14 top-72 right-14 cursor-pointer    ">
            <img src={arrowRight} onClick={()=>{
                window.location.replace(`http://localhost:5173/image/:${newParam+1}`)
            }} alt='right' />
        </div>
        <div className="arrowLeft arrow absolute rounded-lg p-2 w-14 top-72 left-10 cursor-pointer">
             <img src={arrowLeft} onClick={()=>{
                window.location.replace(`http://localhost:5173/image/:${newParam-1}`)
            }}alt='right' />
        </div>

        </>
    )
}
export default Arrows