// styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './assets/css/navbar.css';
import './assets/css/footer.css';
import './assets/css/wwa_hero.css'
import './assets/css/wwa_services.css';
import './assets/css/wwa_pricing.css';
import './assets/css/indexStyle.css';
import './assets/css/works.css';
import './assets/css/w_quote.css';
import './assets/css/w_reviews.css';
import './assets/css/careers.css';
import './assets/css/contact.css';

// pages
import WhoWeAre from './pages/whoWeAre';
import Works from './pages/works';
import Careers from './pages/careers';
import ContactUs from './pages/contact';

// dependencies
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components
import NavbarBM from './components/navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavbarBM />
        <Routes>
          <Route path="/" element={<WhoWeAre/>} />
          <Route path="/works" element={<Works/>} />
          <Route path="/careers" element={<Careers/>} />
          <Route path="/contactUs" element={<ContactUs/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
