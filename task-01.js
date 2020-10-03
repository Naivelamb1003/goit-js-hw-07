const getCategoriesAmount = function (_categories) {
  const listCategories = _categories.children;
  const categoriesAmount = listCategories.length;
  return `В списке ${categoriesAmount} категории. `;
};

const printCategoriesHeader = function (_categoriesHeader) {
  const resultArray = [];
  _categoriesHeader.forEach((listItemNode) => {
    const categoryName = listItemNode.children[0].innerHTML;
    const elementAmount = listItemNode.children[1].children.length;
    resultArray.push(
      `Категория: ${categoryName}\nКоличество элементов: ${elementAmount}`
    );
  });
  return resultArray;
};

const categories = document.querySelector("#categories");
const categoriesHeader = document.querySelectorAll(".item");

console.log(getCategoriesAmount(categories));
printCategoriesHeader(categoriesHeader).forEach((categoryInfo) =>
  console.log(categoryInfo)
);
