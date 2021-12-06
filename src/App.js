import { Routes ,Route } from 'react-router-dom';
import './App.css';
import UserIdPassLogin from './components/UserIdPassLogin';
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';
import PatientLogin from './pages/PatientLogin';
import Test from './pages/Test';

function App() {
  return (
<Routes>
<Route exact path="/" element={<Home/>}/>
<Route exact path="/tests" element={<Test/>}/>
<Route exact path="/patient_login" element={<PatientLogin/>}/>
<Route exact path="/contactus" element={<ContactUs/>}/>
<Route exact path="/patient_login_id_pass" element={<UserIdPassLogin/>}/>
 </Routes> 
        
  );
}

export default App;
