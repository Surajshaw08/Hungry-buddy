import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import HeroSection from './Components/HeroSection';
import Category from './Components/Category';
import Footer from './Components/Footer';
import CitiesSection from './Components/CitiesSection';
import AppDownloadSection from './Components/AppDownloadSection';
import Login from './Components/Login';
import LoginModal from './Components/LoginModal';

function App() {
  return (
    <Router>
      {/* Nav Component */}
      <Nav />

      {/* Routes for Different Pages */}
      <Routes>
        {/* Home Page Route */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <Category />
              <AppDownloadSection/>
              <CitiesSection />
              <Footer />
            </>
          }
        />

        {/* Login Page Route */}
        <Route path="/login" element={<Login />} />
        <Route path="/loginmodal" element={<LoginModal />} />
      </Routes>
    </Router>
  );
}

export default App;
