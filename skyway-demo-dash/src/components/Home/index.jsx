// sample custom inline CSS
function Home() {
  // Sample paragraph text
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu ultricies mauris, at facilisis quam. Vivamus et tellus facilisis, vehicula nunc a, fermentum ipsum. ";

  const fadeInKeyframes = `@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }`;

  return (
    <>
      <style>{fadeInKeyframes}</style>
      <div className="flex justify-center items-center h-screen overflow-auto bg-gray-100">
        <div
          style={{ animation: "fadeIn 1s ease-out" }}
          className="w-full max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md"
        >
          <h1 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Home
          </h1>

          <p className="text-gray-700 text-lg leading-relaxed">{text}</p>
          {/* Repeating the paragraph to take up more space, like the About page */}
          <p className="text-gray-700 text-lg leading-relaxed mt-4">{text}</p>
          <p className="text-gray-700 text-lg leading-relaxed mt-4">{text}</p>
          {/* You can continue to add more text or other content elements to fill the space as needed */}
        </div>
      </div>
    </>
  );
}

export default Home;
