import imgOne from '../../images/imgOne.jpg'
import imgTwo from '../../images/imgTwo.jpg'
import imgThree from '../../images/imgThree.jpg'
import imgFour from '../../images/imgFour.jpg'
import imgSix from '../../images/imgSix.jpg'
import imgFive from '../../images/imgFive.jpg'
import { useParams } from "react-router-dom"
const api = [{
    'id': 1,
    'img': imgOne,
    'description': 'Paisaje, colores calidos, dibujo animado'
},
{
    'id': 2,
    'img': imgTwo,
    'description': 'dibujo a mano, colores calidos, dibujo animado'
}, 
{
    'id': 3,
    'img': imgThree,
    'description': ' colores calidos, dibujo animado'
},
{
    'id': 4,
    'img': imgFour,
    'description': 'Paisaje, colores calidos, videojuego'
},
{
    'id': 5,
    'img': imgFive,
    'description': 'Paisaje, colores frios, dibujo animado'
},
{
    'id': 6,
    'img': imgSix,
    'description': 'Paisaje, colores pastel '
}
]

const ImgShow = ()=>{
const params = useParams( )
const newParam = parseInt(params.id.slice(1))
    return(
        <>
        <div className="img-show flex justify-center mt-3 m-auto w-6/12">
          {newParam>0 && newParam<=6?
          <>
          <img className='w-96 h-72 cursor-pointer rounded-lg' onClick={()=>{
            window.location.href = `${api[newParam -1].img}`
          }} src={api[newParam - 1].img} alt="Error"  />
          <p className="absolute bottom-40 font-semibold" >{api[newParam-1].description }</p>
          </>
          :newParam <= 0?
          <>
          
            {window.location.href = `/image/:${newParam+ newParam + 6}`}
            <img className='w-96 h-72 cursor-pointer rounded-lg' onClick={()=>{
              window.location.href = `${api[newParam -1].img}`
            }} src={api[newParam - 1].img} alt="Error"  />
            <p className="absolute bottom-40 font-semibold" >{api[newParam-1].description }</p>

          </>:newParam >6?
          <>
            {window.location.replace(`/image/:${newParam- newParam + 1}`)}
            <img className='w-96 h-72cursor-pointer  rounded-lg onClick={()=>{
              window.location.href = `${api[newParam -1].img}`}}' src={api[newParam - 6].img} alt="Error"  />
           <p className="absolute bottom-40 font-semibold" >{api[newParam-6].description }</p>

          </> :<></>
          
          }
        </div>
        </>
    )
}

export default ImgShow
/*{newParam <= 6?<img className='w-96 h-72 ' src={api[newParam - 1].img} alt="Error"  />: newParam >6?
          <> 
          {window.location.replace(`/image/:${newParam-newParam + 1}`)}
            <img className='w-96 h-72 ' src={api[newParam - 6].img} alt="Error"  />
          </>: <>
          {
            console.log(newParam + newParam + 1)
          }
          </>
          }*/