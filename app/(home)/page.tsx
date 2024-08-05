import Movie from "../components/movie";
import styles from "../../styles/home.module.css";
import { BASE_URL } from "../constants";

export const metadata = {
  title: "Home",
};

async function getMovies() {
  await new Promise((res) => setTimeout(res, 2000));
  const res = await fetch(BASE_URL);
  const json = await res.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  );
}
