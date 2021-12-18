import Header from '../components/Header';
import Footer from '../components/footer';
import Navbar from '../components/Navbar';
import '../css/team.css';
import {Link} from "react-router-dom";
import t1 from '../Images/team/t1.jpg';
import t2 from '../Images/team/t2.jpg';
import t3 from '../Images/team/t3.jpg';
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

<DoctorCard img={t1} fb="" ist="" go="" name="Dr. Frank Bigham" des="Associate Dentist"/>
<DoctorCard img={t2} fb="" ist="" go="" name="Dr. mukesh rana" des="Associate Dentist"/>
<DoctorCard img={t3} fb="" ist="" go="" name="Dr. Frank Bigham" des="Associate Dentist"/>



</div>


<Footer/>
        </>
    )
}
