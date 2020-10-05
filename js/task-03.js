const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryUL = document.querySelector("#gallery");
const creatListItem = function ({ url, alt }) {
  const listitem = document.createElement("li");
  const itemImg = document.createElement("img"); //<img>
  const createList = galleryUL.appendChild(listitem);
  const createItemImg = createList.appendChild(itemImg);
  createItemImg.setAttribute("src", url);
  createItemImg.setAttribute("alt", alt); //<img src=""https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"">
  listitem.classList.add("gallery");
  createItemImg.classList.add("picture");
  return createItemImg;
};

images.forEach((img) => creatListItem(img));
