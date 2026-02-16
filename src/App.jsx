import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './App.css'
import Home from './pages/Home'
import SNSPage from './pages/SNSPage'
import AIPage from './pages/AIPage'
import SideJobPage from './pages/SideJobPage'
import ContactPage from './pages/ContactPage'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        {/* Header */}
        <header className={`header${scrolled ? ' scrolled' : ''}`}>
          <div className="container header-inner">
            <div className="logo">
              <Link to="/" onClick={closeMenu}>
                <img src="/logo.png" alt="Skill Kraft Logo" />
                <span>(株)Skill Kraft</span>
              </Link>
            </div>

            <button
              className={`menu-toggle${menuOpen ? ' open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="メニュー"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <nav className={`nav${menuOpen ? ' open' : ''}`}>
              <Link to="/#services" onClick={closeMenu}>事業内容</Link>
              <Link to="/#company" onClick={closeMenu}>会社概要</Link>
              <Link to="/contact" className="nav-cta" onClick={closeMenu}>お問い合わせ</Link>
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

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div className="footer-inner">
              <div className="footer-brand">
                <div className="footer-brand-logo">
                  <img src="/logo.png" alt="Skill Kraft" />
                  <span>(株)Skill Kraft</span>
                </div>
                <p>
                  AI × SNSで、個人と企業の<br />
                  ポテンシャルを最大限に解放します。
                </p>
              </div>

              <div className="footer-nav">
                <h4>Services</h4>
                <ul>
                  <li><Link to="/sns">SNSマーケティング</Link></li>
                  <li><Link to="/ai">AI導入支援</Link></li>
                  <li><Link to="/side-job">AIサボ</Link></li>
                </ul>
              </div>

              <div className="footer-nav">
                <h4>Company</h4>
                <ul>
                  <li><Link to="/#company">会社概要</Link></li>
                  <li><Link to="/contact">お問い合わせ</Link></li>
                </ul>
              </div>
            </div>

            <div className="footer-bottom">
              <p>&copy; 2024 Skill Kraft Inc. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App
