"use client";
import { useEffect, useState } from "react";

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const res = await fetch(
      "https://nomad-movies.nomadcoders.workers.dev/movies"
    );
    const json = await res.json();
    setMovies(json);
  };
  useEffect(() => {
    getMovies();
    setIsLoading(false);
  }, []);
  return <div>{isLoading ? "Loading..." : JSON.stringify(movies)}</div>;
}
