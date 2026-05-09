import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '55672071-de73ab20c9a46d751cd90c1a4';

export const per_page = 15;

// export function getImagesByQuery(query) {
//   return axios
//     .get(BASE_URL, {
//       params: {
//         key: API_KEY,
//         q: query,
//         image_type: 'photo',
//         orientation: 'horizontal',
//         safesearch: true,
//       },
//     })
//     .then(({ data }) => data);
// }

// export async function getImagesByQuery(query, page) {
//   try {
//     const { data } = await axios.get(BASE_URL, {
//       params: {
//         key: API_KEY,
//         q: query,
//         image_type: 'photo',
//         orientation: 'horizontal',
//         safesearch: true,
//         page: page,
//         per_page: perPage,
//       },
//     });
//     return data;
//   } catch (error) {
//     console.log(error.message);
//   }
// }

export async function getImagesByQuery(query, page = 1) {
  try {
    const { data } = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: page,
        per_page,
      },
    });
    console.log(data);

    return data;
  } catch (error) {
    console.log(error.message);
  }
}
