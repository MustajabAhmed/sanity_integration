import createImageUrlBuilder from '@sanity/image-url'
import { client } from '@/lib/sanityClient'
import { Image } from 'sanity'
import { dataset, projectId } from '../env'

const imageBuilder = createImageUrlBuilder(client)

export const urlForImage = (source: Image) => {
  return imageBuilder?.image(source)
}
