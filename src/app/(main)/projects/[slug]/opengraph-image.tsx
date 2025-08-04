import { sanityFetch } from "@/sanity/lib/live";
import { projectQuery } from "@/sanity/lib/queries";
import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export default async function Image({ params }: { params: { slug: string } }) {
   const interSemiBold = await readFile(
      join(process.cwd(), "assets/Inter-SemiBold.ttf")
   );

   const { data } = await sanityFetch({
      query: projectQuery,
      params,
      tags: ["project"],
   });

   return new ImageResponse(
      (
         <div
            style={{
               width: "100%",
               height: "100%",
               background: "#000",
               color: "#fff",
               display: "flex",
               flexDirection: "column",
               justifyContent: "center",
               padding: "80px 100px",
               fontFamily: "InterDisplay",
            }}
         >
            <h1
               style={{
                  fontSize: 70,
                  margin: 0,
                  lineHeight: 1.2,
               }}
            >
               {data?.title}
            </h1>

            <p
               style={{
                  fontSize: 28,
                  color: "#a1a1a1",
                  marginTop: 20,
                  maxWidth: "80%",
               }}
            >
               A modern web experience by Raheem Òrèkóyà
            </p>
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
