import '../css/footer.css';
import logo from '../Images/logo.png';
import { GoLocation } from 'react-icons/go';
import { FiPhoneCall } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
import {Link} from "react-router-dom";


export default function Footer() {
    return (
        <div className="footer">
            
{/* labs */}
            <div className="div1">
<img src={logo} alt={logo} /> 
<li><GoLocation id="iccc" />
<p>Kamal's P Square, Nada Rd, near Old SBI ATM and Suresh Clinic, Shivalik Vihar, Nayagaon,   Punjab</p></li>
<li><FiPhoneCall id="iccc" />
<p>+91 8568990340</p></li>
<li>
<AiOutlineMail id="iccc" />
<p>promiselaboratorieschdng@gmail.com</p></li>


            </div>
        

        {/* links */}
            <div className="div2">
<h1>About Us</h1>
<li><Link to="/">Company Profile</Link></li>
<li><Link to="/doctor">Our Team</Link></li>
<li><Link to="">Awards and Certificates</Link></li>
<li><Link to="/career">Career</Link></li>
<li><Link to="/contactus">Contact Us</Link></li>


            </div>
        
        
        {/* contact us */}
            <div className="div3">
            <h1>Useful Links</h1>
<li><Link to="/appointment">Book Appointment</Link></li>
<li><Link to="/tests">Blood Test</Link></li>
<li><Link to="/rediology">Rediology Test</Link></li>
<li><Link to="/homeServices">Home Services</Link></li>
<li><Link to="/covid19">Covid 19 Test</Link></li>

            </div>

            <div className="div4">
                <h1>Location</h1>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13712.402249943672!2d76.7955451!3d30.7717569!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xed08dafae805595a!2sPromise%20Laboratories%20-%20SRL%20Diagnostics%20lab!5e0!3m2!1sen!2sin!4v1637320676933!5m2!1sen!2sin" title="loaction"></iframe>
            </div>

{/*  */}
    <div className="copyright"> © Copyright 2021-22 All Rights Reserved | Designed by <a href="/prpwebsite" target="_blank">PRP WEBSITES</a> </div>
    
        </div>
    )
}
