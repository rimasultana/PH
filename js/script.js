const loadCategory = async () => {
  try {
    const res = await fetch(
      "https://openapi.programming-hero.com/api/phero-tube/categories"
    );
    const data = await res.json();
    displayCategory(data.categories);
  } catch (error) {
    console.log(error);
  }
};

const displayCategory = (categories) => {
  const categoryContainer = document.getElementById('category');

  categories.forEach((item) => {
     const buttonContainer = document.createElement('button');
     buttonContainer.innerHTML =`
     <button class='btn border-2 border-red-600'>${item.category}</button>
     `;
    categoryContainer.append(buttonContainer);
  });
};



  


 


loadCategory();

// {category_id: '1001', category: 'Music'}
