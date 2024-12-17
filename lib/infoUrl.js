import watchType from "./watchType";

export default function infoUrl(infoData) {
  //anime watch url route
  if (infoData.episodeId || infoData.episodeTitle) {
    return `/watch/${infoData.id}${infoData.episodeId}`;
  } else if (infoData) {
    //anime & tmdb info page
    return `/info/${infoData.id}?type=${watchType(infoData)}`;
  }
}
