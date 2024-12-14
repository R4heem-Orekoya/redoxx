import createImageUrlBuilder from "@sanity/image-url";
import { dataset, projectId, studioUrl } from "@/lib/sanity/api";
import { createDataAttribute, CreateDataAttributeProps } from "next-sanity";

const imageBuilder = createImageUrlBuilder({
   projectId: projectId || "",
   dataset: dataset || "",
});

export const urlForImage = (source: any) => {
   // Ensure that source image contains a valid reference
   if (!source?.asset?._ref) {
      return undefined;
   }

   return imageBuilder?.image(source).auto("format").fit("max");
};

export function resolveOpenGraphImage(image: any, width = 1200, height = 627) {
   if (!image) return;
   const url = urlForImage(image)?.width(1200).height(627).fit("crop").url();
   if (!url) return;
   return { url, alt: image?.alt as string, width, height };
}

type DataAttributeConfig = CreateDataAttributeProps & Required<Pick<CreateDataAttributeProps, "id" | "type" | "path">>;

export function dataAttr(config: DataAttributeConfig) {
   return createDataAttribute({
      projectId,
      dataset,
      baseUrl: studioUrl,
   }).combine(config);
}