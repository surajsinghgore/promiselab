import Header from "../components/Header";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import "../css/appointemnt.css";
import { useEffect, useState } from "react";
export default function Appointment() {
    const[date,setDate]=useState();
  useEffect(()=>{
    var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = dd+'/'+mm+'/'+yyyy;

setDate(today);
  },[])

  return (
    <>
      <Header />
      <Navbar services={true} />

      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Services
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Appointment
          </li>
        </ol>
      </nav>

      <div className="appointment">
        <h2>Book Today's Appointment</h2>
       
        <form action="">
        <h1>{date}</h1>
          <li>
            <h4>Name</h4>
            <input type="text" name="name" placeholder="Enter Your Full Name" />
          </li>
          <li>
            <h4>Phone</h4>
            <input
              type="number"
              name="phone"
              placeholder="Enter Your Mobile Number"
            />
          </li>
          <li>
            <h4>Email Id</h4>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email Id"
            />
          </li>
          <li>
            <h4>Address</h4>
            <input
              type="text"
              name="address"
              placeholder="Enter Your Address"
            />
          </li>
          <li>
            <h4>Age</h4>
            <input type="number" name="age" placeholder="Enter Your Age" />
          </li>
          <li>
            <h4>City</h4>
            <input
              type="text"
              name="city"
              placeholder="Enter Your City"
            />
          </li>
       <li id="ids">

        
<h4 id="h44">Appointment For ?</h4>
<select name="service">
  <option value="blood">Blood Test</option>
  <option value="rediology">Rediology Service</option>
  <option value="checkup">Doctor CheckUp</option>
</select>
        
</li>
<li id="ids">  

<h4 id="h44">Select Time Slot?</h4>
<select name="time">
  <option value="8.00-8.30">8.00 AM - 8.30 AM</option>
  <option value="">8.30 AM - 9.00 AM</option>
  <option value="">9.00 AM - 9.30 AM</option>
  <option value="">9.30 AM - 10.00 AM</option>
  <option value="">10.00 AM - 10.30 AM</option>
  <option value="">10.30 AM - 11.00 AM</option>
  <option value="">11.00 AM - 11.30 AM</option>
  <option value="">11.30 AM - 12.00 PM</option>
  <option value="">12.00 PM - 12.30 PM</option>
  <option value="">12.30 PM - 1.00 PM</option>
  <option value="">1.00 PM - 1.30 PM</option>
  <option value="">1.30 PM - 2.00 PM</option>
  <option value="">2.00 PM - 2.30 PM</option>
  <option value="">2.30 PM - 3.00 PM</option>
  <option value="">3.00 PM - 3.30 PM</option>
  <option value="">3.30 PM - 4.00 PM</option>
  <option value="">4.00 PM - 4.30 PM</option>
  <option value="">4.30 PM - 5.00 PM</option>
  <option value="">5.00 PM - 5.30 PM</option>
  <option value="">5.30 PM - 6.00 PM</option>
  <option value="">6.00 PM - 6.30 PM</option>
  <option value="">6.30 PM - 7.00 PM</option>
  <option value="">7.00 PM - 7.30 PM</option>
  <option value="">7.30 PM - 8.00 PM</option>
  <option value="">8.00 AM - 8.30 AM</option>
</select>
       </li>
          <div className="time">
           
              
              <button id="book">Book Appointment</button>
          </div>

         
        </form>
      </div>

      <Footer />
    </>
  );
}
