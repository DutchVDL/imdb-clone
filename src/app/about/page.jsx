import React from "react";

const About = () => {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">About Our Movie Database App</h1>
      <p className="text-gray-700 dark:text-gray-200">
        Welcome to our Movie Database App, your go-to destination for all things
        cinema! Here at IMDB Clone, we are passionate about movies and committed
        to providing you with a comprehensive and enjoyable film-watching
        experience.
      </p>

      <h2 className="text-2xl font-bold my-4">Our Mission</h2>
      <p className="text-gray-700 dark:text-gray-200">
        Our mission is simple: to help you discover, explore, and enjoy the
        world of movies. Whether you're a casual moviegoer or a dedicated
        cinephile, our app is designed to cater to your unique tastes and
        preferences. From the latest blockbusters to timeless classics, we've
        got it all covered.
      </p>

      <h2 className="text-2xl font-bold my-4">What Sets Us Apart</h2>
      <ul className="list-disc ml-6 text-gray-700 dark:text-gray-200">
        <li>
          <strong>Extensive Database:</strong> With a vast collection of movies
          spanning various genres, languages, and eras, our database is a
          treasure trove for movie enthusiasts. Discover hidden gems, explore
          new releases, and revisit your favorite films with ease.
        </li>
        <li>
          <strong>User-Friendly Interface:</strong> We believe in making your
          movie-watching journey seamless and enjoyable. Our user-friendly
          interface ensures that you can navigate through the app effortlessly,
          find the information you need, and discover exciting new titles.
        </li>
      </ul>
    </div>
  );
};

export default About;
