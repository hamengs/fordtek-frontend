import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/about-us/AboutUs';
import OurLocations from './pages/about-us/OurLocations';
import JoinUs from './pages/join-us/JoinUs';

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
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
