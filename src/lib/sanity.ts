import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const client = createClient({
   projectId: '91fgcc4v',
   dataset: 'production',
   useCdn: false,
   apiVersion: '2024-07-17'
})

const builder = imageUrlBuilder(client)

export const urlFor = (src: string) => {
   return builder.image(src) as unknown as string
}

export default client