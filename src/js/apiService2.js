import { alert } from '@pnotify/core';

const API_KEY = '21800674-819b02d10e21d1802ff230ab2';
// const query = 'cat';
// let pageNumber = 1;
// const URL = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${query}&page=${pageNumber}&per_page=12&key=${API_KEY}`;

export default fetchQuery;

function fetchQuery(query, pageNumber) {
  return fetch(
    `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${query}&page=${pageNumber}&per_page=12&key=${API_KEY}`,
  ).then(response => {
    if (response.status === 404) {
      alert({
        type: 'error',
        text: 'Error 404!',
        styling: 'brighttheme',
        mode: 'light',
      });
    }
    return response.json();
  });
}
