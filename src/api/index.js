import axios from 'axios';

const API_BASE_URL = 'https://cdn.contentful.com';
const API_SPACE_ID = 'd5k3r4z6j6xj';
const API_KEY = 'a946d38bcebedc6236a6bee3e7c3c7186fc78de4b4b660c0e86dac916a0275e3';

export const ContentfulAPI = axios.create({
	baseURL: `${API_BASE_URL}/spaces/${API_SPACE_ID}`,
	params: {
		access_token: API_KEY,
		include: 1
	}
})
