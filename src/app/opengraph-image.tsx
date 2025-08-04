import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export default async function Image() {
   const interSemiBold = await readFile(
      join(process.cwd(), "assets/Inter-SemiBold.ttf")
   );

   return new ImageResponse(
      (
         <div
            style={{
               display: "flex",
               alignItems: "center",
               justifyContent: "center",
               width: "100%",
               height: "100%",
               background: "#000000",
               color: "#ffffff",
            }}
         >
            <div
               style={{
                  display: "flex",
                  gap: "15px",
                  alignItems: "center",
                  fontSize: 60,
                  letterSpacing: "-4px",
               }}
            >
               <span>Raheem</span>
               <span
                  style={{
                     color: "#a1a1a1",
                     fontSize: 48,
                  }}
               >
                  Òrèkóyà
               </span>
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
