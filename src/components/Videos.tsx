import { useEffect, useState } from "react";

const videos = Array.from({ length: 24 }, (_, i) => {
  const name = `mr-b-sax-video-${String(i + 1).padStart(2, "0")}`;

  return {
    id: i + 1,
    src: `/videos/${name}.mp4`,
    thumbnail: `/thumbnails/${name}.webp`,
  };
});

export default function Videos() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const visibleVideos = showAll ? videos : videos.slice(0, 6);

  useEffect(() => {
    if (!activeVideo) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveVideo(null);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeVideo]);

  return (
    <section id="video" className="section">
      <h2>Ascultă-l live</h2>

      <div className="videos">
        {visibleVideos.map((video) => (
          <div className="video" key={video.id}>
            <button
              type="button"
              className="video__thumbnail"
              onClick={() => setActiveVideo(video.src)}
              aria-label={`Redă videoclipul ${video.id}`}
            >
              <img
                src={video.thumbnail}
                alt={`MR.B SAX - Moment live ${video.id}`}
                loading="lazy"
                decoding="async"
              />

              <span className="video__play" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </button>
          </div>
        ))}
      </div>

      {videos.length > 6 && (
        <div className="videos__more">
          <button
            type="button"
            className="videos__more-button"
            onClick={() => setShowAll((prev) => !prev)}
          >
            {showAll ? "Arată mai puține" : "Vezi toate videoclipurile"}
          </button>
        </div>
      )}

      {activeVideo && (
        <div
          className="video-lightbox"
          role="presentation"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="video-lightbox__content"
            role="dialog"
            aria-modal="true"
            aria-label="Redare videoclip MR.B SAX"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="video-lightbox__close"
              onClick={() => setActiveVideo(null)}
              aria-label="Închide videoclipul"
            >
              ×
            </button>

            <video
              key={activeVideo}
              src={activeVideo}
              controls
              autoPlay
              playsInline
              preload="auto"
            >
              Browserul nu suportă redarea acestui videoclip.
            </video>
          </div>
        </div>
      )}
    </section>
  );
}
