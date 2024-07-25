import { BASE_URL } from "../(home)/page";

async function getVideos(id: string) {
  console.log(`Fetcing videos: ${Date.now()}`);
  const res = await fetch(`${BASE_URL}/${id}/videos`);
  throw new Error("something broke....");
  // return res.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return <h6>{JSON.stringify(videos)}</h6>;
}
