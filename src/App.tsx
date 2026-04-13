import {Navigate, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/about-us/AboutUs';
import JoinUs from './pages/join-us/JoinUs'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/join-us" element={<JoinUs />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
