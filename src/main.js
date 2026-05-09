import { getImagesByQuery, per_page } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const fetchBtn = document.querySelector('.second-fetch');
let page = 1;
let curQuerry = '';

form.addEventListener('submit', handleSubmit);
fetchBtn.addEventListener('click', onLoadMore);

async function handleSubmit(event) {
  event.preventDefault();

  const value = event.currentTarget.elements['search-text'].value.trim();
  page = 1;

  if (!value) {
    iziToast.error({
      message: 'Please enter a search query!',
    });
    return;
  }

  clearGallery();
  hideLoadMoreButton();
  showLoader();

  // getImagesByQuery(value)
  //   .then(({ hits }) => {
  //     if (hits.length === 0) {
  //       iziToast.error({
  //         message:
  //           'Sorry, there are no images matching your search query. Please try again!',
  //       });
  //       return;
  //     }

  //     createGallery(hits);
  //   })
  //   .catch(error => {
  //     iziToast.error({
  //       message: 'Something went wrong. Please try again later!',
  //     });

  //     console.log(error.message);
  //   })
  //   .finally(() => {
  //     event.target.reset();
  //     hideLoader();
  //   });

  try {
    const posts = await getImagesByQuery(value, page);
    const total_pages = Math.ceil(posts.totalHits / per_page);

    if (posts.hits.length === 0) {
      iziToast.error({
        message: 'Something went wrong. Please try again later!',
      });
      return;
    }
    createGallery(posts.hits);

    if (page >= total_pages) {
      showLoadMoreButton();
    } else {
      hideLoadMoreButton();

      iziToast.error({
        message: `We're sorry, but you've reached the end of search results.`,
      });
    }
  } catch (error) {
    console.log(error.message);
    iziToast.error({
      message: 'Something went wrong. Please try again later!',
    });
  } finally {
    event.target.reset();
    hideLoader();
    curQuerry = value;
  }
}

async function onLoadMore(event) {
  page++;
  fetchBtn.disabled = true;
  showLoader();
  hideLoadMoreButton();

  try {
    const posts = await getImagesByQuery(curQuerry, page);
    const total_pages = Math.ceil(posts.totalHits / per_page);
    const card = document.querySelector('.card').getBoundingClientRect().height;

    createGallery(posts.hits);

    window.scrollBy({
      left: 0,
      top: card * 2,
      behavior: 'smooth',
    });
    if (page >= total_pages) {
      showLoadMoreButton();
    } else {
      hideLoadMoreButton();

      iziToast.error({
        message: `We're sorry, but you've reached the end of search results.`,
      });
    }
  } catch (error) {
    console.log(error.message);
    iziToast.error({
      message: 'Something went wrong. Please try again later!',
    });
  } finally {
    fetchBtn.disabled = false;
    hideLoader();
  }
}
