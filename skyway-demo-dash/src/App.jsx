import Header from './components/Header';
import Nav from './components/Nav'; 
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom'; // Import Outlet

function App() {
  // The Outlet will render the current page component based on the route
  // No need for useLocation or currentPage state

  return (
    <div className="font-bold">
      <Header className="shadow" />
      <Nav /> {/* Nav will no longer receive currentPage as a prop */}
      <main className="flex-grow">
        <Outlet /> {/* Renders the matching child route */}
      </main>
      <footer className="bg-white">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
