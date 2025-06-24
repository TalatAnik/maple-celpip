import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhyChooseUsPage from './pages/WhyChooseUs'
import ScrollToTop from './components/ScrollToTop'
import MeetTheTeam from './pages/MeetTheTeam'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'





function App() {
  return (
    <div data-theme="maple-theme" className="min-h-screen flex flex-col">
      <Router basename="/maple-celpip/">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/why-choose-us" element={<WhyChooseUsPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<MeetTheTeam />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
