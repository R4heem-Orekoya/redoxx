import { defineLive } from "next-sanity";
import { client } from './client'

export const { sanityFetch } = defineLive({ 
  client: client.withConfig({ 
    apiVersion: 'vX' 
  }) 
});