import { BiLogoYoutube } from "react-icons/bi";

function getYoutubeId(url: string) {
   const regex =
      /(youtu.*be.*)\/(watch\?v=|embed\/|v|shorts|)(.*?((?=[&#?])|$))/gm;
   const match = regex.exec(url);

   if (!match) {
      return null;
   }
   return match[3];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function YoutubeWidget(props: any) {
   const { url } = props;
   const id = getYoutubeId(url);

   return (
      <div className="pt-1 relative">
         {url ? (
            <>
               {props.renderDefault(props)}
               <YoutubeIframe videoId={id} />
            </>
         ) : (
            <div className="flex items-center justify-center gap-x-2 my-3">
               <BiLogoYoutube className="text-[red] text-lg" />
               <span>Add YouTube URL</span>
            </div>
         )}
      </div>
   );
}

function YoutubeIframe({ videoId }: { videoId: string | null }) {
   if (!videoId) {
      return null;
   }
   return (
      <iframe
         className="aspect-video"
         width="100%"
         height="100%"
         src={`https://www.youtube.com/embed/${videoId}`}
         title="YouTube video player"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
         allowFullScreen
      ></iframe>
   );
}