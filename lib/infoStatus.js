export default function infoStatus(info) {
  if (info.releaseDate) {
    return info.releaseDate;
  } else if (info.type) {
    return info.type;
  } else if (info.views) {
    return (
      <p>
        Views: <span className="text-slate-300">{info.views}</span>
      </p>
    );
  }
}
