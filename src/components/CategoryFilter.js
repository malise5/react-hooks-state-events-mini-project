import React from "react";

function CategoryFilter({categories, selectedCategory,onSelectCategory}) {

  const Cbuttons = categories.map((category) => {
    //using the ternary method to get the category selected
    const className = category === selectedCategory? "selected" : null;
    return(
      <button key = {category} className ={className} onClick={() => onSelectCategory(category)}>
        {category}
      </button>
    )
  })


  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {Cbuttons}
    </div>
  );
}

export default CategoryFilter;
