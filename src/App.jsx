import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import AllNews from './pages/AllNews';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Search from './pages/Search';
import SingleNews from './pages/SingleNews';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-news" element={<AllNews />} />
          <Route path="/search/:id" element={<Search />} />
          <Route path="/single-news" element={<SingleNews />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
