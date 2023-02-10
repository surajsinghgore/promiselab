import Header from '../components/Header';
import Footer from '../components/footer';
import Navbar from '../components/Navbar';
import '../css/team.css';
import {Link} from "react-router-dom";

import imgs1 from '../Images/teams/1.jpg'
import imgs2 from '../Images/teams/2.jpg'
import DoctorCard from '../props/DoctorCard';

export default function Doctor() {
    return (
        <>
   
            <Header />
<Navbar services={true}/>


<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><Link to="/">Home</Link></li>
    <li class="breadcrumb-item active" aria-current="page">Services</li>
    <li class="breadcrumb-item active" aria-current="page">Doctors</li>
  </ol>
</nav>

<div className="team">


<h1>Perfect Team</h1>
<h3>A Professional & Care Provider</h3>
<hr />

<DoctorCard img={imgs1} fb="" ist="" go="" name="Dr. Harinder Kaushish" des="Health Doctor" phone="+91 9872619723"/>
<DoctorCard img={imgs2} fb="" ist="" go="" name="Mr. Sudesh Yadav" des="DMLT, Lab Incharge" phone="+91 8568990340"/>




</div>


<Footer/>
        </>
    )
}
