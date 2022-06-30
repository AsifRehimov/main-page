import React from "react";

function Menu({items}){
    return (
     <div className="section-center">
           {items.map((menuItem, key) => {
                return (<>
           {console.log("menuItem", menuItem.category)}
           <div key={key} className="menu-item v-strech">
                <img src={menuItem.img} alt={menuItem.name}/>
                <div className="about-div">
                    <p className="abo me">{menuItem.name}</p>
                    <h4 className="about-h">{menuItem.text}</h4>
                </div>
           </div> 
           
           </>
           
        )})}
     </div>
    )
}
export default Menu;