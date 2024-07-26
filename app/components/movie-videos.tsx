import { BASE_URL } from "../(home)/page";
import styles from "../../styles/moive-videos.module.css";

async function getVideos(id: string) {
  console.log(`Fetcing videos: ${Date.now()}`);
  const res = await fetch(`${BASE_URL}/${id}/videos`);
  return res.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return (
    <div className={styles.container}>
      {videos.map((video) => (
        <iframe
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gryoscope; picture-in-picture"
          allowFullScreen
          title={video.name}
        />
      ))}
    </div>
  );
}
