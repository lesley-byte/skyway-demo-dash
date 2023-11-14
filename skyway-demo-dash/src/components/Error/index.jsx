function Error() {
  return (
    <div className="flex justify-center items-center h-screen bg-red-100">
      <div className="text-center">
        <p className="text-6xl mb-4">⚠️</p> {/* Emoji as an icon */}
        <h1 className="text-5xl font-bold text-red-600 mb-3">Error Occurred!</h1>
        <p className="text-lg text-red-800">Something went wrong. Please try again later.</p>
      </div>
    </div>
  );
}

export default Error;
