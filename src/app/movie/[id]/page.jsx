import Image from "next/image";

async function fetchMovie(movieId) {
  const API_KEY = process.env.API_KEY;

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
  );
  return await res.json();
}

const page = async ({ params }) => {
  const movieId = params.id;

  const movie = await fetchMovie(movieId);
  return (
    <div className="w-full">
      <div className="p-4 md:top-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original${
            movie.backdrop_path || movie.poster_path
          }`}
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-80 transition-all duration-700"
          placeholder="blur"
          blurDataURL="../app/favicon.ico"
          alt="picture"
        ></Image>
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">
            {movie.title || movie.name}
          </h2>
          <p>
            <span className="text-lg mb-3  font-semibold mr-1">Overview:</span>
            {movie.overview}
          </p>
          <p>
            <span className=" mb-3  font-semibold mr-1">Date Released:</span>
            {movie.release_date || movie.first_air_date}
          </p>
          <p>
            <span className=" mb-3  font-semibold mr-1">Rating:</span>
            {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
