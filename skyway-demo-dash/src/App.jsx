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
    <div>
      <Header>
        <Nav currentPage={currentPage} />
      </Header>
      <main>
        <Page currentPage={currentPage} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
