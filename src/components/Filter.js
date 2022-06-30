import React,{useState} from "react";
import items from "../server/Photos"
import Category from "./filter/Categories"
import Menu from "./filter/Menu";

const allCategories = ['ALL', ...new Set(items.map((item) => item.category))];


function Filter() {
    
        const[menuItems, setMenuItems] = useState(items); 
        const[categories, setCategories] = useState(allCategories);


const filterItems = (category) =>{

    if(category==='ALL'){
        setMenuItems(items);
        return;
    }

        const newItems = items.filter((item) =>item.category === category);
        setMenuItems(newItems)
    }

   
    return(
        <section className="menu section">
            <Category categories={categories} filterItems = {filterItems}/>
            <Menu items={menuItems}/>   
        </section>
    )
} console.log("bura");
export default Filter;