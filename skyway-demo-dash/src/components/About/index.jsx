function About() {
  return (
    // Flex container to center the content vertically and horizontally
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {/* Max width container with padding and margin auto for horizontal centering */}
      <div className="w-full max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
        {/* Typography styling for the heading */}
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-4">About Us</h1>
        
        {/* Example text content with a comfortable line length and line height */}
        <p className="text-gray-700 text-lg leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl sit amet aliquet fermentum, 
          nisi orci viverra massa, ac interdum augue magna vitae risus. Curabitur lacinia, 
          eros in faucibus cursus, mauris ante volutpat nulla, eget egestas erat lectus ut justo. 
          Sed a justo condimentum, facilisis risus at, auctor sapien.
        </p>
        
        {/* Further paragraphs or content */}
        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          Phasellus ut diam dictum, faucibus lorem a, suscipit mi. Maecenas a nunc vel est consequat 
          vehicula at at massa. Quisque bibendum turpis ac eros iaculis, at aliquet orci tempor. 
          Praesent ut quam quis quam venenatis fringilla. Morbi vestibulum efficitur orci ac sodales.
        </p>

        {/* You can add more paragraphs or other content elements here */}
      </div>
    </div>
  )
}

export default About;
