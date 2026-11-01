import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {

    const [categorias, setCategorias]= useState (["One punch"])
    
    const onAddCategory = (newCategory) => {
        if (categorias.includes(newCategory)) return;
        
        setCategorias([newCategory, ...categorias]);
    };    

    return (
        <div>

            <h1> App de gifs </h1>

            <AddCategory onAddCategory={onAddCategory}/> 

            <ol>
                {categorias.map((categoria)=> {
                   return <GifGrid key={categoria} category={categoria}/>
                      
                })}
            </ol>    
        </div>   

    );
};

export default GifExpertApp;

