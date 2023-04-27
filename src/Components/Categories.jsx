import React, { useState } from "react";

const Categories = ({ foodItems, setFoodItems, categories }) => {
  const [categoriesItem, setCategoriesItem] = useState(foodItems);
  const filterItems = (category) => {
    if (category === "all") {
      return setFoodItems(categoriesItem);
    }
    const newItem = categoriesItem.filter((item) => item.category === category);
    setFoodItems(newItem);
  };

  return (
    <>
      <div className="btn-container">
        {categories.map((category, index) => {
          return (
            <button
              type="button"
              key={index}
              onClick={() => filterItems(category)}
              className="filter-btn"
            >
              {category}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
