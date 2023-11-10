function Contact() {
  return (
    // Centering the card container on the screen
    <div className="flex justify-center items-center h-screen overflow-auto bg-gray-100">
      {/* Card container with rounded border, shadow, and padding */}
      <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
        <form className="flex flex-col space-y-4">
          <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">Contact Us</h1>

          {/* Input field for name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Input field for email */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Textarea for the message */}
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          {/* Submit button */}
          <button type="submit" className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
