function Footer() {
  return (
    <footer className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <p className="text-gray-700 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Your Company Name. All rights reserved.
          </p>
          {/* Add more footer content here if needed */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
