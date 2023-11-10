import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="flex flex-col min-h-screen h-auto overflow-auto">
      <Header /> {/* Header with its own internal styling */}
      <Nav /> {/* Nav with its own internal styling */}
      <main className="flex-grow">
        <Outlet /> {/* Renders the matching child route */}
      </main>
      <Footer /> {/* Footer with its own internal styling */}
    </div>
  );
}

export default App;
