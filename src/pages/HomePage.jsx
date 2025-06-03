import MovieList from "../components/MovieList";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-4 mt-4 flex justify-center">Welcome</h1>
      <MovieList />
    </div>
  );
};

export default HomePage;
