import { ContentfulWorkAPI } from "api"
const WORK_TYPE_ID = "workPost"
const PROJECT_TYPE_ID = "projectPost"

export const fetchWorkPosts = async () => {
  return ContentfulWorkAPI.get(
    `/entries?content_type=${WORK_TYPE_ID}&order=sys.createdAt`
  )
}

export const fetchProjectPosts = async () => {
  return ContentfulWorkAPI.get(
    `/entries?content_type=${PROJECT_TYPE_ID}&order=sys.createdAt`
  )
}

export const fetchWorkPost = async POST_ID => {
  return ContentfulWorkAPI.get(`/entries/${POST_ID}`)
}

export const resolveWorkImageUrl = async ASSET_ID => {
  return ContentfulWorkAPI.get(`/assets/${ASSET_ID}`)
}