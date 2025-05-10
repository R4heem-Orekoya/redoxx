import { TableValueProps } from "@/types";

export default function Table({ value }: { value: TableValueProps }) {
   const { caption, table } = value;
   const tableContent = table?.rows;

   if (!tableContent || tableContent.length < 1) {
      return <p>Table Data Missing</p>;
   }

   const [tableHeading, ...tableBody] = tableContent.map((t) => t.cells);

   if (!tableHeading || tableBody.length < 1) {
      return <p>Table must have at least one cell.</p>;
   }

   return (
      <>
         {caption && (
            <p className="my-2 text-sm text-muted-foreground text-center">
               {caption}
            </p>
         )}

         <div className="overflow-hidden rounded-md border mb-6">
            <table className="w-full text-base table-fixed">
               <thead className="bg-secondary text-left">
                  <tr className="divide-x">
                     {tableHeading.map((heading) => (
                        <th
                           key={heading}
                           scope="col"
                           className="text-sm font-medium px-3 py-2 border-r last:border-r-0"
                        >
                           {heading}
                        </th>
                     ))}
                  </tr>
               </thead>
               <tbody>
                  {tableBody.map((row, index) => (
                     <tr key={index} className="divide-x">
                        {row.map((cell, cellIndex) => (
                           <td
                              key={cellIndex}
                              className="px-3 py-2 border-t border-r last:border-r-0 truncate"
                           >
                              {cell}
                           </td>
                        ))}
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </>
   )
}