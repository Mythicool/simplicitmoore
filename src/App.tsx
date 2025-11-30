import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import ComputerRepairs from './pages/ComputerRepairs'
import BusinessIT from './pages/BusinessIT'
import Services from './pages/Services'
import About from './pages/About'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'

function App() {
    return (
        <Router>
            <div className="min-h-screen flex flex-col bg-obsidian-950">
                <Navigation />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/repairs" element={<ComputerRepairs />} />
                        <Route path="/business-it" element={<BusinessIT />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/pricing" element={<Pricing />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    )
}

export default App
