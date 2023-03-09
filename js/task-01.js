const listCategoriesEl = document.querySelector(`#categories`);
const itemCategoriesEl = listCategoriesEl.children;

    console.log("Number of categories: ", itemCategoriesEl.length); 

    
[...itemCategoriesEl].forEach(category => {
    const nameCategory = category.firstElementChild.textContent;
    const elementsOfCategory = category.lastElementChild.children.length;
    console.log("Category: ", nameCategory);
    console.log("Elements:", elementsOfCategory);
});