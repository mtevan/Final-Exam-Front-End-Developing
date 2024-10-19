
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home'; 
import About from './components/pages/About/About'; 
import Header from './components/pages/Header/Header'; 
import Footer from './components/pages/Footer/Footer'; 
import Profile from './components/pages/Profile/Profile'; 

import './App.css'; 

const App = () => {
  return (
    <Router>
      <Header />
      <main className="main-content"> {/* Use main for semantic HTML */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
