import React,{useState} from 'react';
import {AddCategory} from './components/AddCategory'
import { GrifGrid } from './components/GifGrid';

export const GifExpertApp = () =>{
    //const categories = ['One Punch','Samuari X','Dragon Ball'];
    const [categories,setCategories] = useState(['One Punch']);

    /*
    const handleAdd = () =>{
        setCategories([...categories,'HunterXHunter']);
    }*/

    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            <ol>
                {
                    categories.map(category =>( 
                        <GrifGrid 
                        key ={category}
                        category={category}/>
                    ))
                   
                }
            </ol>
        </>
    );
}

