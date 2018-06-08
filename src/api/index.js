import axios from 'axios'

const API_BASE_URL = 'https://cdn.contentful.com'
const API_POST_SPACE_ID = 'd5k3r4z6j6xj'
const API_WORK_SPACE_ID = '7bv7forlf75i'
const API_POST_KEY = 'a946d38bcebedc6236a6bee3e7c3c7186fc78de4b4b660c0e86dac916a0275e3'
const API_WORK_KEY = 'ed74435e1445e2afa2f4c2071ab821c4e1bf917a36f1617601be3e13e188a3e2'

// For blog posts
export const ContentfulPostAPI = axios.create({
  baseURL: `${API_BASE_URL}/spaces/${API_POST_SPACE_ID}`,
  params: {
    access_token: API_POST_KEY,
    include: 1
  }
})

// For example work posts
export const ContentfulWorkAPI = axios.create({
  baseURL: `${API_BASE_URL}/spaces/${API_WORK_SPACE_ID}`,
  params: {
    access_token: API_WORK_KEY,
    include: 1
  }
})