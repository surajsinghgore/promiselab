import { Routes ,Route } from 'react-router-dom';
import './App.css';
import UserIdPassLogin from './components/UserIdPassLogin';
import CartPage from './pages/CartStore.js';

import ContactUs from './pages/ContactUs';
import Doctor from './pages/doctor';
import Home from './pages/Home';
import PatientLogin from './pages/PatientLogin';
import Rediology from './pages/Rediology';
import Test from './pages/Test';
import { CartProvider } from 'react-use-cart';
import CartStore from './pages/CartStore.js';
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

 </Routes> 
   </CartProvider >  
  );
}

export default App;
