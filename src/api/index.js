import axios from 'axios';
const API = {}

const API_BASE_URL = 'https://cdn.contentful.com';
const API_SPACE_ID = 'd5k3r4z6j6xj';
const API_KEY = 'a946d38bcebedc6236a6bee3e7c3c7186fc78de4b4b660c0e86dac916a0275e3';
const TYPE_ID = '2wKn6yEnZewu2SCCkus4as'


API.fetchPosts = () => {
  return axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_KEY}&content_type=${TYPE_ID}`)
}

export default API


// https://cdn.contentful.com/spaces/d5k3r4z6j6xj/assets/${asset_id}?access_token=a946d38bcebedc6236a6bee3e7c3c7186fc78de4b4b660c0e86dac916a0275e3