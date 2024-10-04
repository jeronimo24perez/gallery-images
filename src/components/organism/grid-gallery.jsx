import imgOne from '../../images/imgOne.jpg'
import imgTwo from '../../images/imgTwo.jpg'
import imgThree from '../../images/imgThree.jpg'
import imgFour from '../../images/imgFour.jpg'
import imgSix from '../../images/imgSix.jpg'
import imgFive from '../../images/imgFive.jpg'
import './grid-gallery.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const api = [
    {
        'id': 1,
        'img': imgOne
    },
    {
        'id': 2,
        'img': imgTwo
    }, 
    {
        'id': 3,
        'img': imgThree
    },
    {
        'id': 4,
        'img': imgFour
    },
    {
        'id': 5,
        'img': imgFive
    },
    {
        'id': 6,
        'img': imgSix
    }
]

const GridGallery = ()=>{
    return(
        <>
        <main className='grid-gallery sm:grid-cols-2 grid lg:grid-cols-3 gap-4 mt-6 ml-3 text-center justify-items-center'>
                {api.map(e =>
                 <Link to={`/image/:${e.id}`} className="flex w-full justify-center img-container " key={e.id}  >
                     <img className='w-10/12 h-60 rounded-lg ' src={e.img} alt="" /> 
                </Link>
                )}
                
            </main>
          
        </>
    )
}

export default GridGallery