import React from "react";

const Categories = ({ categories, filterItems }) => {
    return (
      <div className="btn-container ms-5 mb-4">
        {categories.map((category, index) => {
          return (
            <a
              className="filter-btn "
              key={index}
              onClick={() => filterItems(category)}
            >
              {category}
            </a>
          );
        })}
      </div>
    );
  };
export default Categories;