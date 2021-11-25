import '../css/header.css';
import logo from '../Images/logo.png';


import { GoLocation } from "react-icons/go";
import { FiPhoneCall } from "react-icons/fi";
import { FiClock } from "react-icons/fi";





export default function Header() {
    return (
        <div className="header">
        {/* company */}
            <div className="company">
<img src={logo} alt={logo} id="logo"/>
            </div>

            {/* contact */}
            <div className="contact">
                <FiPhoneCall id="icon"/>
               <h1>+91 8568990340</h1> 
                <p>promiselaboratorieschdng@gmail.com</p> 
            </div>

           
            <div className="contact">
                <FiClock id="icon"/>
               <h1>7:00 -  19:00 </h1> 
                <p>Monday - Saturday</p> 
            </div>

            <div className="contact">
                <GoLocation id="icon" />
               <h1>Location</h1> 
                <p>Kamal's P Square, Nada Rd, near Old SBI ATM and Suresh Clinic, Shivalik Vihar, Nayagaon, Punjab</p> 
            </div>
    
        </div>
    )
}
