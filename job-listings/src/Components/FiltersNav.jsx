import styles from './FiltersNav.module.css'
import { useState } from 'react'


function FiltersNav({jobsdata,setCategories,categories}){
   
   
    function removefromcategory(id){
        return setCategories(curcategories => curcategories.filter((category) => category.id !== id  ))
        
    }

   
   return(
        <div className={styles.navigation}>
        <ul className={styles.filters}>
            {categories.map((category,index) => 
            <li key={index}><span>{category.name}</span><button onClick={() => removefromcategory(category.id)}>X</button></li>
            )}
        </ul>
        <p className={styles.clear}>Clear</p>
        </div>
    )
}
export default FiltersNav