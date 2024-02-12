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
      pip: true,
      theme: "#69DEF6",
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
      ],
      controls: [
        {
          name: "Download",
          position: "right",
          html: option.download
            ? `<a href="${option.download}" target="_blank">Download</a>`
            : "",
          tooltip: "You can download anime here!",
          style: {
            color: "white",
          },
        },
      ],
    });

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
  const sources = videoSources?.sources.map(source => ({
    html: source.quality,
    url: source.url,
  }));

  const definition = sources?.find(
    item => item.html === "auto" || item.html === "default"
  );

  return (
    <Player
      option={{
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
        url: definition?.url || "",
        quality: sources || [],
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
  );
}
