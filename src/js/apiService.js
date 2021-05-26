const API_KEY = '21800674-819b02d10e21d1802ff230ab2';
const query = 'cat';
let pageNumber = 1;
// const URL = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${query}&page=${pageNumber}&per_page=12&key=${API_KEY}`;

const debounce = require('lodash.debounce');

const refs = {
  textInput: document.querySelector('[name="query"]'),
};

refs.textInput.addEventListener('input', debounce(createURL, 500));

async function createURL() {
  //   console.log(refs.textInput.value);
  //   const text = fetchQuery(refs.textInput.value);
  if (refs.textInput.value !== '') {
    let URLnew = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${refs.textInput.value}&page=${pageNumber}&per_page=12&key=${API_KEY}`;
    console.log(URLnew);
    const promise = await fetchQuery(URLnew);
    console.log(promise);
    return promise;
  }
}

const fetchQuery = async URL => {
  try {
    const response = await fetch(`${URL}`);
    console.log(response);
    console.log(response.hits);
    return response.json();
  } catch (err) {
    throw err;
  }
};

// const promise = fetchQuery(URL);
// promise.then(friends => console.log(friends));

const promise = createURL(URL);
export default promise;
