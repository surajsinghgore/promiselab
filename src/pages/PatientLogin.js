import Header from '../components/Header';
import Footer from '../components/footer';
import Navbar from '../components/Navbar';
import img1 from '../Images/ux/1.png';
import {Link} from "react-router-dom";
import '../css/patientLogin.css';
export default function PatientLogin() {
    return (
        <div>
         <Header />
<Navbar patient={true}/>
<div className="patient">

{/* left side */}
    <div className="left">
<h1>Welcome to <span> Promise Laboratories</span></h1>

<img src={img1} alt={img1} />
    </div>

    {/* right side  */}
    <div className="right">
        <form action="">
            <h4>Login</h4>
            <p>Please enter your Mobile Number to proceed</p>
            <input type="text" name="mobileNo" id="mobileNo" placeholder="Enter your mobile number"/>
           
            <button id="login-btn">Login with OTP</button>
            </form>


           <Link to="/useridpass"><button id="id-pass">Login with userId and Password</button></Link>


      
       
    </div>
</div>


          <Footer />  
        </div>
    )
}
