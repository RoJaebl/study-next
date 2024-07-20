import { BASE_URL } from "../(home)/page";

async function getMovie(id: string) {
  console.log(`Fetcing movies: ${Date.now()}`);
  const res = await fetch(`${BASE_URL}/${id}`);
  return res.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return <h6>{JSON.stringify(movie)}</h6>;
}
