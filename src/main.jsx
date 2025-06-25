import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import Shop from './pages/Shop.jsx'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="shop" element={<Shop />} />
        <Route path="About" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>,
)
