import { sanityFetch } from "@/sanity/lib/live";
import { blogQuery } from "@/sanity/lib/queries";
import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export default async function Image({ params }: { params: { slug: string } }) {
   const interSemiBold = await readFile(
      join(process.cwd(), "assets/Inter-SemiBold.ttf")
   );

   const { data } = await sanityFetch({
      query: blogQuery,
      params,
      tags: ["blog"],
   });
   
   return new ImageResponse(
      (
         <div
            style={{
               width: "100%",
               height: "100%",
               background: "#000000",
               color: "#ffffff",
               display: "flex",
               flexDirection: "column",
               justifyContent: "center",
               padding: "80px 100px",
               fontFamily: "InterDisplay",
            }}
         >
            <div
               style={{
                  fontSize: 60,
                  fontWeight: 600,
                  lineHeight: 1.2,
               }}
            >
               {data?.title}
            </div>
            <div
               style={{
                  marginTop: 40,
                  fontSize: 30,
                  color: "#a1a1a1",
               }}
            >
               by Raheem Òrèkóyà
            </div>
         </div>
      ),
      {
         width: 1200,
         height: 630,
         fonts: [
            {
               name: "InterDisplay",
               data: interSemiBold,
               style: "normal",
               weight: 500,
            },
         ],
      }
   );
}
