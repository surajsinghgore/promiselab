import Header from '../components/Header';
import Footer from '../components/footer';
import Navbar from '../components/Navbar';
import img1 from '../Images/ux/4.png';
import '../css/patientLogin.css';
import {Link} from "react-router-dom";

export default function UserIdPassLogin() {
    return (
        <div>
         <Header />
<Navbar patient={true}/>
<div className="patient">

{/* left side */}
    <div className="left">
<h1>Welcome to <span> Promise Laboratories</span></h1>

<img src={img1} alt={img1} style={{width:"45%"},{marginLeft:"5%"}}/>
    </div>

    {/* right side  */}
    <div className="right">
        <form action="">
            <h4>Login</h4>
            <p>Please enter your Mobile Number to proceed</p>
            <input type="email" name="email" id="email" placeholder="Email Id"/>
            <input type="password" name="password" id="password" placeholder="Password"/>
         
           <button id="login-btn">Login</button>
            </form>


           <Link to="/patient_login"> <button id="id-pass" style={{marginTop:"40px"}}>Login with OTP</button></Link>

          
      
    </div>
</div>


          <Footer />  
        </div>
    )
}
