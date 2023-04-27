import React, { useState } from "react";
import Categories from "./Categories";
import items from "../data";
const allCategories = [
  "all",
  ...new Set(items.map((itemCat) => itemCat.category)),
];

const Food = () => {
  const [foodItems, setFoodItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  console.log(categories);
  return (
    <>
      <Categories
        foodItems={foodItems}
        setFoodItems={setFoodItems}
        categories={categories}
      />
      <div className="section-center">
        {foodItems.map((foodItem) => {
          const { id, img, title, price, desc } = foodItem;
          return (
            <article key={id} className="menu-item">
              <img src={img} alt={title} className="photo" />
              <div className="item-info">
                <header>
                  <h4>{title}</h4>
                  <h4 className="price">{price}</h4>
                </header>
                <p>{desc}</p>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
};

export default Food;
