import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function About() {
  return (
    <main className="flex flex-col min-h-100vh bg-white">
      <h2 className="text-center text-2xl font-bold mt-10">关于我们</h2>
      <p className="text-center mt-4 px-6">
        我们致力于帮助学生通过 CELPIP 考试，提供专业的指导和丰富的资源。
      </p>
    </main>
  )
}



function Contact() {
  return (
    <main className="flex flex-col min-h-100vh bg-white">
      <h2 className="text-center text-2xl font-bold mt-10">联系我们</h2>
      <p className="text-center mt-4 px-6">
        如果您有任何问题，请通过 info@maplecelpip.com 联系我们。
      </p>
    </main>
  )
}

function App() {
  return (
    <div data-theme="maple-theme" className="min-h-screen flex flex-col">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
