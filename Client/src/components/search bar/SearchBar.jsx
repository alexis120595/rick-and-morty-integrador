import { useState } from "react";

import style from "./searchBar.module.css";

export default function SearchBar({onSearch}) {

   const [id, setId] = useState("")

   const handleChange = (event)=>{

      setId(event.target.value)

   }

   return (
      <div>
            
            <input type='search' onChange={handleChange} value={id} placeholder="Search" />

         <button onClick={ ()=> onSearch(id)} className={style.button} >Agregar</button> 
         
      </div>
   );
}
