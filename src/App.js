
import './App.css';
import Navbar from './components/navbar/Navbar';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import SignUp from './components/authentication/signup/SignUp';
import Login from './components/authentication/login/Login';
import Aboutus from './components/aboutus/Aboutus';
import Profile from './components/profiles/Profile';
import Dashboard from './components/dashboard/Dashboard';
import Seeds from './components/seeds/Seeds';
import Friend from './components/friend/Friend';
import Features from './components/features/Features';
import Faq from './components/faq/Faq';
import Overview from './components/dashboardstart/Overview';

function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="profile" element={<Profile />} />
        <Route path="aboutus" element={<Aboutus />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="seeds" element={<Seeds />} />
        <Route path="friends" element={<Friend />} />
        <Route path="features" element={<Features />} />
        <Route path="faq" element={<Faq />} />
        <Route path="dashboard" element={<Dashboard />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
