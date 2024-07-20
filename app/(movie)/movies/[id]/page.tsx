import { BASE_URL } from "../../../(home)/page";

async function getMovie(id: string) {
  console.log(`Fetcing movies: ${Date.now()}`);
  await new Promise((res) => setTimeout(res, 2000));
  const res = await fetch(`${BASE_URL}/${id}`);
  return res.json();
}

async function getVideos(id: string) {
  console.log(`Fetcing videos: ${Date.now()}`);
  await new Promise((res) => setTimeout(res, 2000));
  const res = await fetch(`${BASE_URL}/${id}/videos`);
  return res.json();
}

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
  return <h1>{movie.title}</h1>;
}
