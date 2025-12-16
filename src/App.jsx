import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import SNSPage from './pages/SNSPage'
import AIPage from './pages/AIPage'
import SideJobPage from './pages/SideJobPage'
import ContactPage from './pages/ContactPage'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        {/* Header (Shared) */}
        <header className="header">
          <div className="container header-inner">
            <div className="logo">
              <Link to="/">
                <img src="/logo.png" alt="Skill Kraft Logo" />
                <span>(株)Skill Kraft</span>
              </Link>
            </div>
            <nav className="nav">
              <Link to="/#services">事業内容</Link>
              <Link to="/#company">会社概要</Link>
              <Link to="/contact">お問い合わせ</Link>
            </nav>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sns" element={<SNSPage />} />
          <Route path="/ai" element={<AIPage />} />
          <Route path="/side-job" element={<SideJobPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <footer className="footer">
          <p>&copy; 2024 Skill Kraft Inc.</p>
        </footer>
      </div>
    </Router>
  )
}

export default App
