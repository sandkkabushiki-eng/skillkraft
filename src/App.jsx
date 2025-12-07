import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import SNSPage from './pages/SNSPage'
import AIPage from './pages/AIPage'
import SideJobPage from './pages/SideJobPage'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        {/* Header (Shared) */}
        <header className="header container">
          <div className="logo">
            <Link to="/">(株)Skill Kraft</Link>
          </div>
          <nav className="nav">
            <Link to="/#services">事業内容</Link>
            <Link to="/#company">会社概要</Link>
            <a href="mailto:sandkkabushiki@gmail.com">お問い合わせ</a>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sns" element={<SNSPage />} />
          <Route path="/ai" element={<AIPage />} />
          <Route path="/side-job" element={<SideJobPage />} />
        </Routes>

        <footer className="footer">
          <p>&copy; 2024 Skill Kraft Inc.</p>
        </footer>
      </div>
    </Router>
  )
}

export default App
