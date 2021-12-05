import Header from '../components/Header';
import Footer from '../components/footer';
import img38 from '../Images/7.jpg';

import '../css/patientLogin.css';
export default function PatientLogin() {
    return (
        <div>
         <Header />
<div className="patient_Login">
    <img src={img38} alt={img38} id="bg"/>
    </div>
          <Footer />  
        </div>
    )
}
