import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'

function About() {
  return <h2>About Page</h2>
}

function Store() {
  return <h2>Store (Coming Soon)</h2>
}

function App() {
  return (
    <div data-theme="maple" className="min-h-screen bg-white">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
