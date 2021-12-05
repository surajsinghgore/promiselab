import { Routes ,Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import PatientLogin from './pages/PatientLogin';
import Test from './pages/Test';

function App() {
  return (
<Routes>
<Route exact path="/" element={<Home/>}/>
<Route exact path="/tests" element={<Test/>}/>
<Route exact path="/patient_Login" element={<PatientLogin/>}/>
 </Routes> 
        
  );
}

export default App;
