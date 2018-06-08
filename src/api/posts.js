import { ContentfulPostAPI } from "api"
const TYPE_ID = "blogPost"

export const fetchPosts = async () => {
  return ContentfulPostAPI.get(
    `/entries?content_type=${TYPE_ID}&order=-sys.createdAt`
  )
}

export const fetchPost = async POST_ID => {
  return ContentfulPostAPI.get(`/entries/${POST_ID}`)
}

export const resolveImageUrl = async ASSET_ID => {
  return ContentfulPostAPI.get(`/assets/${ASSET_ID}`)
}
