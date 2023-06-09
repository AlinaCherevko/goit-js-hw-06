const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const galleryList = document.querySelector(".gallery");

// console.log(galleryList);
// images.forEach(({ url, alt }) => {
//   const imageGallery = `<img class="image-gallery" src=${url} alt="${alt}">`;

//   // console.log(imageGallery);
//   const itemGallery = `<li> ${imageGallery}</li>`;

//   // console.log(itemGallery);
//   galleryList.insertAdjacentHTML("beforeend", itemGallery);
// });

const ulContent = images
  .map(
    ({ url, alt }) =>
      `<li>${`<img class="image-gallery" src=${url} alt="${alt}">`}</li>`
  )
  .join("");

galleryList.insertAdjacentHTML("beforeend", ulContent);

console.log(galleryList);
