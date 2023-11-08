import Header from './components/Header';
import Nav from './components/Nav'; 
import Page from './components/Page';
import Footer from './components/Footer';

import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage"; // custom hook for local storage

function App() {
  const currentPage = useLocation().pathname;

  // Custom hook to interact with local storage
  const [lastVisitedPage, setLastVisitedPage] = useLocalStorage('lastVisitedPage', '/');

  // Update Local Storage when currentPage changes
  useEffect(() => {
    setLastVisitedPage(currentPage);
  }, [currentPage, setLastVisitedPage]);

  return (
    // Apply Tailwind classes for overall layout
    <div className="font-bold">
      {/* Header */}
      <Header className="shadow" />
        <Nav currentPage={currentPage} />
     

      {/* Main content area with padding and flex-grow to take up available space */}
      <main className="flex-grow">
        <Page currentPage={currentPage} />
      </main>

      {/* Footer */}
      <footer className="bg-white">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
