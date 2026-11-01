import { useState } from "react";

const AddCategory = ({onAddCategory}) => {
        const [newCategory, setNewCategory] = useState("");

        const envioDatos = (event) => {
            //evita la recarga de pagina
            event.preventDefault();
            
            //"        categoria dos tres     "
            if (newCategory.trim().length <= 1) return;
            
            // usuario: "    gabriela ramos"
            // usuario.trim(): "gabriela ramos"
            

            setNewCategory("");

            onAddCategory(newCategory.trim());
        };

    return (

        <form 
            onSubmit={(e) => {
                envioDatos(e)
            }}
            >
                <input 
                    type="text" 
                    placeholder="Buscar gifs"
                    value={newCategory}
                    onChange={(evento) => {
                            console.log(evento);
                            setNewCategory(evento.target.value);
                    }}
                />

        </form>
    );
};
 export default AddCategory;