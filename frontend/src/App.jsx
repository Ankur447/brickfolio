import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './Components/Navbar';
import Filter from './Components/Filter';
import Home from './Components/Home';
import HeadingSection from './Components/HeadingSection';
import MobileBottomNav from './Components/MobileBottomNav';

// Placeholder Components for Routes
const Login = () => <h1 className="text-center mt-10">Login Page</h1>;
const Shortlist = () => <h1 className="text-center mt-10">Shortlist Page</h1>;
const NotFound = () => <h1 className="text-center mt-10">404 - Not Found</h1>;



const App = () => {
  return (
    <Router>
      {/* Navbar will always be visible */}
      
      <div className="min-w-[650px]">
        <Navbar />
        <Filter />
        <HeadingSection />
        <Home />
        <MobileBottomNav />
      </div>
      
      
      
      {/* Define the routes */}
      {/* <Routes> */}
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/shortlist" element={<Shortlist />} /> */}
        
        {/* <Route path="*" element={<NotFound />} /> */}
      {/* </Routes> */}
    </Router>
  );
};

export default App;