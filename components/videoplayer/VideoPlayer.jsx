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
  const defaultQuality = option.sources.find(
    ({ quality }) => quality === "auto" || quality === "default"
  );

  useEffect(() => {
    const art = new Artplayer({
      ...option,
      container: artRef.current,
      pip: true,
      fastForward: true,
      settings: [
        {
          html: option.subtitles.length
            ? "Subtitles"
            : "No subtitles available",
          width: 250,
          tooltip: "",
          selector: option.subtitles.map(subtitle => ({
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
          width: 250,
          tooltip: "",
          selector: option.sources.map(({ quality, url }) => ({
            default: quality === "auto" || quality === "default",
            html: `<span style="color:lightblue">${quality}</span>`,
            url,
          })),
          onSelect: function (item) {
            art.switchQuality(item.url, item.html);
            return item.html;
          },
        },
      ],
      controls: option.download
        ? [
            {
              name: "Download",
              position: "right",
              html: `<a href="${option.download}" target="_blank">Download</a>`,
              tooltip: "You can download anime here!",
              style: {
                color: "white",
              },
            },
          ]
        : [],
    });

    art.switchQuality(defaultQuality.url, defaultQuality.quality);

    if (getInstance && typeof getInstance === "function") {
      getInstance(art);
    }

    return () => {
      if (art && art.destroy) {
        art.destroy(false);
      }
    };
  }, [defaultQuality.quality, defaultQuality.url, getInstance, option]);

  return <div ref={artRef} {...rest}></div>;
};

export default function VideoPlayer({ videoSources }) {
  return (
    <div className="customSm:h-[200px] customSemiMd2:h-[400px] w-full lg:h-[700px]">
      <Player
        option={{
          sources: videoSources?.sources || [],
          subtitles: videoSources?.subtitles || [],
          download: videoSources?.download,
          layers: [
            {
              html: "",
              disable: !Artplayer.utils.isMobile,
              click: function () {
                art.toggle();
              },
            },
          ],
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
          theme: "#69DEF6",
        }}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
}
