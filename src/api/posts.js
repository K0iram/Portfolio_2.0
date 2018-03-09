import { ContentfulAPI } from "api"
const TYPE_ID = "blogPost"

export const fetchPosts = async () => {
  return ContentfulAPI.get(
    `/entries?content_type=${TYPE_ID}&order=-sys.createdAt`
  )
}

export const fetchPost = async POST_ID => {
  return ContentfulAPI.get(`/entries/${POST_ID}`)
}

export const resolveImageUrl = async ASSET_ID => {
  return ContentfulAPI.get(`/assets/${ASSET_ID}`)
}
