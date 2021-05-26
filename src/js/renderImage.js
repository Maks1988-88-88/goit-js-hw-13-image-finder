import fetchQuery from './apiService';

import photoCard from '../templates/photoCard.hbs';

const debounce = require('lodash.debounce');

let pageNumber = 1;

const refs = {
  gallery: document.querySelector('.gallery'),
  textInput: document.querySelector('[name="query"]'),
  btnLoader: document.querySelector('.btnLoader'),
};

refs.textInput.addEventListener('input', debounce(findImage, 1500));
refs.btnLoader.addEventListener('click', nextPage);

function findImage() {
  if (refs.textInput.value !== '') {
    refs.gallery.innerHTML = '';
    query();
    refs.btnLoader.style.display = 'block';
  } else {
    refs.gallery.innerHTML = '';
    refs.btnLoader.style.display = 'none';
  }
}
function query() {
  fetchQuery(refs.textInput.value, pageNumber)
    .then(renderImage)
    .catch(console.error());
}

function renderImage(image) {
  refs.gallery.insertAdjacentHTML('beforeend', photoCard(image.hits));
  scrollpageBtn();
}

function nextPage() {
  pageNumber += 1;
  query();
}

function scrollpageBtn() {
  refs.btnLoader.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
  });
}
