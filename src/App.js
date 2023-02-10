import { Routes ,Route } from 'react-router-dom';
import './App.css';


import ContactUs from './pages/ContactUs';
import Doctor from './pages/doctor';
import Home from './pages/Home';
import PatientLogin from './pages/PatientLogin';
import Rediology from './pages/Rediology';
import Test from './pages/Test';    
import { CartProvider } from 'react-use-cart';
import CartStore from './pages/CartStore.js';
import Gallery from './pages/Gallery';
import HomeService from './pages/HomeService';
import UserIdPass from './components/UserIdPassLogin';
import Appointment from './pages/Appointment';
import Covid19 from './pages/Covid19';
import Career from './pages/Career';
import NewCase from './pages/NewCase';
function App() {
  return (
    <CartProvider >
<Routes>
<Route exact path="/" element={<Home/>}/>
<Route exact path="/tests" element={<Test/>}/>
<Route exact path="/patient_login" element={<PatientLogin/>}/>
<Route exact path="/doctor" element={<Doctor/>}/>
<Route exact path="/contactus" element={<ContactUs/>}/>
<Route exact path="/rediology" element={<Rediology/>}/>
<Route exact path="/cartpage" element={<CartStore/>}/>
<Route exact path="/gallery" element={<Gallery/>}/>
<Route exact path="/appointment" element={<Appointment/>}/>
<Route exact path="/homeServices" element={<HomeService/>}/>
<Route exact path="/covid19" element={<Covid19/>}/>
<Route exact path="/useridpass" element={<UserIdPass/>}/>
<Route exact path="/career" element={<Career/>}/>
<Route exact path="/newCase" element={<NewCase/>}/>



 </Routes> 
   </CartProvider >  
  );
}

export default App;
