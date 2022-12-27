import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import NucampLogo from './app/assets/img/logo.png';
import './App.css';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import Header from './components/Header';
import Footer from './components/Footer';
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import AboutPage from './pages/AboutPage';
import { fetchCampsites } from './features/campsites/campsitesSlice';
import { fetchPartners } from './features/partners/partnersSlice';

function App() {
  const dispatch = useDispatch(); 

useEffect(() => {
  dispatch(fetchCampsites());
  dispatch(fetchPartners());
}, [dispatch]);

  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='contact' element={<ContactPage/>} />
          <Route path='about' element={<AboutPage />} />          
          <Route path='directory' element={<CampsitesDirectoryPage />} />
          <Route 
            path='directory/:campsiteId'
            element={<CampsiteDetailPage />} 
          />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
