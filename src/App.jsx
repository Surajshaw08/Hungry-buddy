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
     <Nav/>
      {/* Routes for Different Pages */}
      <Routes>
        {/* Home Page Route */}
        <Route
          path="/"
          element={
            <>
              <Category/>
              <HeroSection />
              <AppDownloadSection/>
              <CitiesSection />
              <Footer />
            </>
          }
        />

        {/* Login Page Route */}
        <Route path="/login" element={<Login />} />
        <Route path="/loginmodal" element={<LoginModal />} />
        <Route path="/AppDownloadSection"
         element={<><AppDownloadSection/><Footer/></>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
