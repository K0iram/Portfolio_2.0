import { ContentfulWorkAPI } from "api"
const TYPE_ID = "workPost"

export const fetchWorkPosts = async () => {
  return ContentfulWorkAPI.get(
    `/entries?content_type=${TYPE_ID}&order=-sys.createdAt`
  )
}

export const fetchWorkPost = async POST_ID => {
  return ContentfulWorkAPI.get(`/entries/${POST_ID}`)
}

export const resolveImageUrl = async ASSET_ID => {
  return ContentfulWorkAPI.get(`/assets/${ASSET_ID}`)
}