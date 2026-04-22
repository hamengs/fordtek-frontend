import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/about-us/AboutUs';
import OurLocations from './pages/about-us/OurLocations';
// import ContactUs, { ContactSuccess } from './pages/contact-us/ContactUs';
import JoinUs from './pages/join-us/JoinUs';
import News, { NewsDetail } from './pages/news/News';
// import ProductPage from './pages/products/ProductPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<Navigate to="/about-us/our-company" replace />} />
      <Route path="/about-us/our-company" element={<AboutUs />} />
      <Route path="/about-us/our-locations" element={<OurLocations />} />
      <Route path="/about-us/our-team" element={<Navigate to="/about-us/our-company" replace />} />
      <Route path="/join-us" element={<JoinUs />} />
      <Route path="/join-us/why-choose-us" element={<Navigate to="/join-us" replace />} />
      <Route path="/join-us/jobs" element={<Navigate to="/join-us" replace />} />
      <Route path="/news" element={<News />} />
      <Route path="/news/:slug" element={<NewsDetail />} />
      {/* <Route path="/contact" element={<ContactUs />} />
      <Route path="/contact/success" element={<ContactSuccess />} />
      <Route path="/products/:productSlug" element={<ProductPage />} /> */}
      <Route path="/human-nutrition" element={<Navigate to="/products/human-nutrition" replace />} />
      <Route path="/animal-health" element={<Navigate to="/products/animal-health" replace />} />
      <Route path="/veterinary-drugs" element={<Navigate to="/products/veterinary-drugs" replace />} />
      <Route path="/cosmetics" element={<Navigate to="/products/cosmetics" replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
