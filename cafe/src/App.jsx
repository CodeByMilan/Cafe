import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './Home';
import Reservation from './Reservation';
import MenuPage from './pages/MenuPage';
import Review from './pages/Review';
import ContactPage from './pages/ContactPage';

function App() {
 

  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path ="/reservation" element={<Reservation/>}/>
    <Route path ="/menu" element={<MenuPage/>}/>
    <Route path ="/review" element={<Review/>}/>
    <Route path ="/contact" element={<ContactPage/>}/>
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
