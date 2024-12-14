import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId, studioUrl } from "@/lib/sanity/api"

export const client = createClient({
   projectId,
   dataset,
   apiVersion,
   useCdn: false,
   perspective: "published",
});