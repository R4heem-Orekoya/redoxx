import { defineField, defineType } from "sanity";
import { LuTable } from "react-icons/lu";
import { TableWidget } from "../widgets/table";

export const table = defineType({
   title: "Table",
   name: "customTable",
   type: "object",
   icon: LuTable,
   fields: [
      defineField({
         name: "table",
         title: "Table",
         type: "table",
      }),
      defineField({
         name: "caption",
         type: "string",
         title: "Caption",
         description: "Provide an accessible description for this table",
      }),
   ],
   preview: {
      select: {
         table: "table",
         caption: "caption",
      },
   },
   components: {
      preview: TableWidget,
   },
});
