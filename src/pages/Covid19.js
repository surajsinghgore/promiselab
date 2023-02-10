import Header from '../components/Header';
import Footer from '../components/footer';
import Navbar from '../components/Navbar';
import {Link} from "react-router-dom";
import '../css/covid19.css';


import img62 from '../Images/62.jpg'
export default function Covid19() {
    return (
        <>
                           <Header />
<Navbar patient={true}/>


<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><Link to="/">Home</Link></li>
    <li class="breadcrumb-item active" aria-current="page">Patients</li>
    <li class="breadcrumb-item active" aria-current="page">Covid 19</li>

  </ol>
</nav> 

<div className="covid">
    <div className="covidtest">
<img src={img62} alt={img62} />
<h2>Covid 19 RT PCR Test In Chandigarh</h2>
<h3>₹ 999</h3>
<p>This is a laboratory test that can identify the virus that causes COVID-19. This test is intended for the detection of the SARS-CoV-2. It makes use of Real-Time Reverse Transcriptase (RT)-PCR Diagnostic Panels.</p>
<h4>Test method - Real-Time PCR</h4>

<button>Book Now</button>
    </div>
</div>


<Footer />
        </>
    )
}
