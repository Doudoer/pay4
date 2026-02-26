import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import QuoteForm from './components/QuoteForm';
import Features from './components/Features';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { ContentProvider } from './context/ContentContext';

const LandingPage = () => (
  <div className="min-h-screen bg-white">
    <Header />
    <main className="mt-20">
      <Hero />
      <div className="container mx-auto px-4 relative z-20">
        <QuoteForm />
      </div>
      <Features />
      <Process />
      <Testimonials />
    </main>
    <Footer />
  </div>
);

function App() {
  return (
    <ContentProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </ContentProvider>
  );
}

export default App;
