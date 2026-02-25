import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import LocationPage from './pages/LocationPage';
import Sitemap from './pages/Sitemap';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/local/:id" element={<LocationPage />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}
