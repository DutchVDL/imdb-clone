const loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full border-t-4 border-blue-500 border-opacity-25 h-12 w-12"></div>
      <p className="ml-3 text-gray-700">Loading...</p>
    </div>
  );
};

export default loading;
