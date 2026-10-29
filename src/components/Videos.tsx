import { useState } from 'react'
import { videos } from '../data/content'

function VideoCard({ id, title }: { id: string; title: string }) {
  const [play, setPlay] = useState(false)
  return (
    <div className="video">
      {play ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button onClick={() => setPlay(true)} aria-label={`Redă: ${title}`}>
          <img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt="" loading="lazy" />
          <span className="video__play" aria-hidden="true" />
        </button>
      )}
      <p>{title}</p>
    </div>
  )
}

export default function Videos() {
  if (videos.length === 0) return null
  return (
    <section id="video" className="section">
      <h2>Ascultă-l live</h2>
      <div className="videos">
        {videos.map((v) => (
          <VideoCard key={v.id} {...v} />
        ))}
      </div>
    </section>
  )
}
