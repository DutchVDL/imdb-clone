import Results from "@/components/Results";
import React from "react";

const page = async ({ params }) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.searchTerm}`
  );

  if (!res.ok) {
    throw new Error("Error fetching data");
  }

  const data = await res.json();

  const results = data.results;
  return (
    <div>
      {results && results.length === 0 && (
        <div className="flex items-center justify-center h-screen">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Oops! No Movies Found
            </h1>
            <p className="text-lg text-gray-600">
              We searched far and wide, but it seems there are no movies
              matching your criteria. Maybe try a different search or explore
              our featured movies for something new and exciting!
            </p>
          </div>
        </div>
      )}

      {results && <Results results={results} />}
    </div>
  );
};

export default page;
