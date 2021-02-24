import {useEffect, useState} from 'react'
import { getGifs } from '../../helpers/getGifs';

export const useFetchGifs = (category) =>{
    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect( () =>{  //Este segmento solo se ejecuta cuando el compononente se renderea por primera vez
        getGifs( category)
        .then(imgs =>{
             //console.log(imgs);
            setstate({
                data: imgs,
                loading: false
            });
          
        })
    },[category])

    return state; 
}