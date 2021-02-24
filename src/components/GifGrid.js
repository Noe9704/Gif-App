import { useEffect } from "react"
import React ,{useState} from 'react'
import { GifGridItem } from "./GifGridItem";
import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "./hooks/useFetchGifs";

export const GrifGrid = ({category}) =>{
    /*
    const [images, setImages] = useState([]);

    useEffect(() => {//Este segmento solo se ejecuta cuando el compononente se renderea por primera vez
       getGifs(category).then(imgs => setImages(imgs))
    }, [category])*/

    const {data:images,loading} = useFetchGifs(category);


    return(
        <>       
        <h3 className="animate__animated animate__rubberBand">{category}</h3> 
        {loading ? <p className="animate__animated animate__rubberBand">Loading</p> : null}
        <div className="card-grid"> 
                {
                    images.map(img =>(
                        <GifGridItem 
                        key={img.id}
                        {...img}/>
                    ))
                    }
        </div>
        </>
    )
}