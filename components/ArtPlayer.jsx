"use client";
import Artplayer from "artplayer";
import Hls from "hls.js";
import { useEffect, useRef } from "react";

function playM3u8(video, url, art) {
  if (Hls.isSupported()) {
    if (art.hls) art.hls.destroy();
    const hls = new Hls();
    hls.loadSource(url);
    hls.attachMedia(video);
    art.hls = hls;
    art.on("destroy", () => hls.destroy());
  } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
    video.src = url;
  } else {
    art.notice.show = "Unsupported playback format: m3u8";
  }
}

const Player = ({ option, getInstance, ...rest }) => {
  const artRef = useRef();

  useEffect(() => {
    const art = new Artplayer({
      ...option,
      container: artRef.current,
      screenshot: true,
      pip: true,
      theme: "#69DEF6",
      settings: [
        {
          html: "Subtitle",
          width: 250,
          tooltip: "",
          selector: option.subtitles.map((subtitle, index) => ({
            default: false,
            html: `<span style="color:lightblue">${subtitle.lang}</span>`,
            url: subtitle.url,
          })),
          onSelect: function (item) {
            art.subtitle.url = item.url;
            return item.html;
          },
        },
        {
          html: "Quality",
          width: 150,
          tooltip: "Auto",
          selector: option.sources.map((source, index) => ({
            default: source.quality === "auto" || source.quality === "default",
            html: source.quality,
            url: source.url,
          })),
          onSelect: function (item) {
            art.switchQuality(item.url, item.html);
            return item.html;
          },
        },
      ],
    });

    art.switchQuality(
      option.sources[option.sources.length - 1].url,
      option.sources[option.sources.length - 1].quality
    );

    if (getInstance && typeof getInstance === "function") {
      getInstance(art);
    }

    return () => {
      if (art && art.destroy) {
        art.destroy(false);
      }
    };
  }, []);

  return <div ref={artRef} {...rest}></div>;
};

export default function VideoPlayer({ videoSources }) {
  //**2nd option for selecting qualities**

  // const sources = videoSources?.sources?.map(item => {
  //   const { url, quality } = item;
  //   const videoSrc = {
  //     html: quality.toUpperCase(),
  //     url,
  //   };
  //   return videoSrc;
  // });

  // const subtitles = videoSources.subtitles.map(sub => ({
  //   url: sub.url,
  //   lang: sub.lang,
  // }));

  // const definition = sources.find(item => {
  //   item.html === "AUTO" || item.html === "DEFAULT";
  // });

  return (
    <div
      className=""
      style={{ width: "100vw", height: "100vh", overflow: "hidden" }}
    >
      <Player
        option={{
          subtitles: videoSources?.subtitles || [],
          sources: videoSources?.sources || [],
          layers: [
            {
              html: "",
              disable: !Artplayer.utils.isMobile,
              click: function () {
                art.toggle();
              },
            },
          ],
          //**2nd option for selecting qualities**
          // url: definition?.url || "",
          // quality: sources || [],
          type: "m3u8",
          customType: {
            m3u8: playM3u8,
          },
          setting: true,
          playbackRate: true,
          aspectRatio: true,
          subtitleOffset: true,
          volume: 0.7,
          isLive: false,
          autoSize: true,
          fullscreen: true,
          hotkey: true,
          miniProgressBar: true,
          playsInline: true,
          fastForward: true,
          autoPlayback: true,
          autoOrientation: true,
          theme: "#dc2626",
        }}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
}
