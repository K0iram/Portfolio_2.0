import { ContentfulAPI } from 'api'
const TYPE_ID = '2wKn6yEnZewu2SCCkus4as'

export const fetchPosts = async () => {
  return ContentfulAPI.get(`/entries?content_type=${TYPE_ID}`)
}

export const fetchPost = async (POST_ID) => {
	return ContentfulAPI.get(`/entries/${POST_ID}`)
}

export const resolveImageUrl = async (ASSET_ID) => {
  return ContentfulAPI.get(`/assets/${ASSET_ID}`)
}


