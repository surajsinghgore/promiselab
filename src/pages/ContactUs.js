import Header from '../components/Header';
import Footer from '../components/footer';
import Navbar from '../components/Navbar';
import '../css/contactus.css';
import {Link} from "react-router-dom";




import { IoIosCall } from 'react-icons/io';
import { GoLocation } from 'react-icons/go';
import { AiOutlineMail } from 'react-icons/ai';
import { BiCurrentLocation } from 'react-icons/bi';

export default function ContactUs() {
    return (
        <>
           <Header />
<Navbar contactus={true}/>
<nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
    <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
  </ol>
</nav>

<div className="contactus">

{/* contact form */}
<div className="left">

<h1>Get in Touch</h1>
<form action="">
<input type="text" name="name" id="name" placeholder="Name *" required/>
<input type="email" name="email" id="email" placeholder="Email Address *" required/>
<input type="number" name="number" id="number" placeholder="Mobile Number *" required/>

<input type="number" name="house" id="house" placeholder="House No *"/>
<input type="text" name="area" id="area" placeholder="Village/Town [eg sector 9]*"/>
<input type="text" name="city" id="city" placeholder="City *"/>
<input type="text" name="state" id="state" placeholder="State *"/>
<input type="text" name="subject" id="subject" placeholder="Subject *"/>
<textarea name="query" id="query" placeholder="Enter your query"></textarea>

<button >Submit</button>
</form>
</div>


{/* address */}
<div className="right">
<h1>Promise Laboratories Office -</h1>

<GoLocation id="icon" /><p>
Kamal's P Square, Nada Rd, near Old SBI ATM and Suresh Clinic, Shivalik Vihar, Nayagaon, Punjab
</p>
<IoIosCall id="icon" />
<p>+91 8568990340</p>

<AiOutlineMail id="icon"/>
<p>promiselaboratorieschdng@gmail.com</p>
<BiCurrentLocation id="icon"/>
<p>160103</p>


</div>


</div>


<Footer />
        </>
    )
}
