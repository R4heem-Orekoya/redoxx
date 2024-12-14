import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "@/lib/cms/api"

export const client = createClient({
   projectId,
   dataset,
   apiVersion,
   useCdn: false,
   perspective: "published",
});