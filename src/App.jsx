import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/home';
import AboutUs from './pages/about';
import UserTestimony from './components/Testimonials/UserTestimony';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/user-testimony" element={<UserTestimony />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
