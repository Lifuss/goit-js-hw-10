import axios from 'axios';

const BASE_URL = 'https://api.thecatapi.com/v1/';

axios.defaults.headers.common['x-api-key'] =
  'live_FMlgfW8OYbvjcjUsCEvuAvTZtUx6LHeUmDdpkyi8NJNmhb0aFyzh0PHlDZbaDWuA';

export function fetchBreeds() {
  const catArr = axios.get(`${BASE_URL}breeds`).then(response => response.data);
  return catArr;
}

// export function fetchCatByBreed(e) {
//     const searchParam = new URLSearchParams({
//         breed_ids: e.target.value
//     })
//     const params = {
//         "x-api-key":"live_FMlgfW8OYbvjcjUsCEvuAvTZtUx6LHeUmDdpkyi8NJNmhb0aFyzh0PHlDZbaDWuA"
//     }
//     const catArticle = fetch(`https://api.thecatapi.com/v1/images/search?${searchParam}`, params)
//     .then(data => data.json()).then(renderImg)
//  }

// function renderImg(arr){
//     div.innerHTML = `<img src="${arr[0].url}" alt="cat"/>`
// }
