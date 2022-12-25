// import state for switching pages
import { useState } from 'react'

// import all pages to be accessed via Navigation
import React from 'react'
import Navigation from './components/Navigation'
import Footer from './components/Footer';
import Portfolio from './components/pages/Portfolio';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';

// logic to render different pages
function App() {
// CREATE VARIABLE TO HANDLE PAGES AND STATE CHANGES
    const [currentPage, setCurrentPage] = useState('About');

    // FUNCTION TO RENDER THE PAGE 
    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
          }
        if (currentPage === "Contact") {
            return <Contact />
        }
          if (currentPage === 'Resume') {
            return <Resume />;
          }
        };

    // FUNCTION FOR HANDLING AND SETTING NEW PAGES WITH NAV LINKS
    const handlePageChange = (page) => setCurrentPage(page);

    // App.js handles the full page display
return (
    <div>
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
        {renderPage()}
        <Footer />
    </div>
)
}

export default App;
