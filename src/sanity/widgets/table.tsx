import { TableValueProps } from "@/types";
import { TablePreview } from "@sanity/table";
import { PreviewProps } from "sanity";

export function TableWidget(props: TableValueProps & PreviewProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { table, caption, title, ...rest } = props;
  const tablePreviewProps = { ...rest, rows: table?.rows || [] };

  return (
    <>
      <div className="px-3">
        <em className="not-italic text-sm font-semibold">
          {caption ?? "Untitled Table"}
        </em>
      </div>
      <TablePreview {...tablePreviewProps} description={caption} />
    </>
  );
}