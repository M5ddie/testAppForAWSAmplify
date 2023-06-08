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
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";


// components
import NavbarBM from './components/navbar';

function App({ signOut }) {
  return (
    <View className="App">
      <BrowserRouter>
      <NavbarBM />
        <Routes>
          <Route path="/" element={<WhoWeAre/>} />
          <Route path="/works" element={<Works/>} />
          <Route path="/careers" element={<Careers/>} />
          <Route path="/contactUs" element={<ContactUs/>} />
        </Routes>
      </BrowserRouter>
      <Card>
        <Heading level={1}>We now have Auth!</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

export default withAuthenticator(App);
