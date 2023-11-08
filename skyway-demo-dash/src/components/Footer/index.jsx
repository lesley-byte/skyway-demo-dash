function Footer() {
  return (
    <footer className="bg-white shadow-md inset-x-0 bottom-0">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <p className="text-gray-700 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Your Company Name. All rights reserved.
          </p>
          {/* Add more footer content here if needed, like links or social media icons */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
