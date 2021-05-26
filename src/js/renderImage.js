import fetchQuery from './apiService';

import photoCard from '../templates/photoCard.hbs';

const debounce = require('lodash.debounce');

const refs = {
  gallery: document.querySelector('.gallery'),
  textInput2: document.querySelector('[name="query"]'),
};

refs.textInput2.addEventListener('input', debounce(text, 500));

async function text() {
//   console.log(refs.textInput2.value);
//   const text = fetchQuery(refs.textInput2.value);
   fetchQuery.then(findImage).catch(console.error());
}
// console.log(refs.gallery);
// console.log(refs.textInput);


async function findImage() {
  try {
    const image = await fetchQuery;
    // console.log(image);
    console.log('+',image.hits);
    const render = await renderImage(image.hits);
  } catch (err) {
    console.log(err);
  }
}
fetchQuery.then(findImage).catch(console.error());
// findImage();

async function renderImage(image) {
  const newImg = await image;
  refs.gallery.insertAdjacentHTML('beforeend', photoCard(newImg));
}
