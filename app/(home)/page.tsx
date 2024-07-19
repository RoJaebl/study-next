export const metadata = {
  title: "Home",
};

const baseUrl = "https://nomad-movies.nomadcoders.workers.dev";

async function getMovies() {
  await new Promise((res) => setTimeout(res, 5000));
  const res = await fetch(new URL("movies", baseUrl));
  const json = await res.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  return <div>{JSON.stringify(movies)}</div>;
}
