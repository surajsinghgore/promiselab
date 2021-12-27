import '../css/homeServices.css';
import Header from '../components/Header';
import Footer from '../components/footer';
import Navbar from '../components/Navbar';
import {Link} from "react-router-dom"; 
import { FaAngleDoubleRight } from 'react-icons/fa';
import img58 from '../Images/58.jpg';
import img59 from '../Images/59.png';
import img60 from '../Images/60.png';
import img61 from '../Images/61.png';

export default function HomeService() {
  
    
    return (
        <>
                 <Header />
<Navbar services={true}/>
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><Link to="/">Home</Link></li>
    <li class="breadcrumb-item active" aria-current="page">Services</li>
    <li class="breadcrumb-item active" aria-current="page">Home Services</li>

  </ol>
</nav> 
<div className="homeServicess">

<div className="banner">
    <img src={img58} alt="img 58" />
    <h1>Diagnostics Lab Tests At Home Service</h1>

    <form action="">
    <div id="circle"><img src={img59} alt={img59} /></div>
    <h4>Home Visit</h4>
        <h5>Name</h5>
        <input type="text" name="name" id="name" placeholder="Please provide your Name" />
        <h5>Mobile</h5>
        <input type="number" name="name" id="name" placeholder="To coordinate with you" />
        <h5>Address</h5>
        <input type="text" name="name" id="address" placeholder="Please provide full address" />
        <button>BOOK APPOINTMENT <FaAngleDoubleRight id="double"/></button>
    </form>
</div>


{/* serivces content */}
<div className="serv">

    <div className="tests">
    <div className="testCard">
        <h2>BLOOD SAMPLE TEST</h2>
        <hr id="hr"/> 
        <p>Promise Laboratories is provides the top  services  in the country. We also have a team of experienced phlebotomists, who collect samples from patients’ home. Booking a lab test is quick and easy. Once a patient books a test, the phlebotomist goes as per agreed time slot and collects the blood/urine sample. After that, we send out accurate reports to patients via email or SMS.
We provide complete health check-up packages and individual lab tests for you and your family. Our wide range of lab tests includes Complete Blood Count, Fasting Blood Sugar (FBS), Postprandial Blood Sugar (PPBS), HBA1C, Thyroid Profile (T3,T4 and TSH), Lipid Profile, Urine Test, CRP Blood Test, Cholesterol Test, Dengue Blood Test, Vitamin Test, Kidney Profile and other test at your convenience.</p>
<Link to="/tests"><button>Book Blood Tests</button></Link>
    </div>

    <div className="testCard">
        <h2>REDIOLOGY TEST</h2>
        <hr id="hr"/> 
        <p>Radiology is the medical discipline that uses medical imaging to diagnose and treat diseases within the bodies of animals and humans.

A variety of imaging techniques such as X-ray radiography, ultrasound, computed tomography (CT), nuclear medicine including positron emission tomography (PET), fluoroscopy, and magnetic resonance imaging (MRI) are used to diagnose or treat diseases. Interventional radiology is the performance of usually minimally invasive medical procedures with the guidance of imaging technologies such as those mentioned above.

The modern practice of radiology involves several different healthcare professions working as a team. The radiologist is a medical doctor who has completed the appropriate post-graduate training and interprets medical images, communicates these findings to other physicians by means of a report or verbally, and uses imaging to perform minimally invasive medical procedures.[1][2] The nurse is involved in the care of patients before and after imaging or procedures, including administration of medications, monitoring of vital signs and monitoring of sedated patients.[3] The radiographer, also known as a "radiologic technologist" in some countries such as the United States and Canada, is a specially trained healthcare professional that uses sophisticated technology and positioning techniques to produce medical images for the radiologist to interpret. Depending on the individual's training and country of practice, the radiographer may specialize in one of the above-mentioned imaging modalities or have expanded roles in image reporting.</p>
<Link to="/rediology"><button>Book Rediology Tests</button></Link>
    </div>

    <div className="testCard">
        <h2>Medical procedure at home</h2>
        <hr id="hr"/> 
        <li>dressing</li>
        <h6>A dressing is a sterile pad or compress applied to a wound to promote healing and protect the wound from further harm. A dressing is designed to be in direct contact with the wound, as distinguished from a bandage, which is most often used to hold a dressing in place. Many modern dressings are self-adhesive.</h6>
        <li>Iv/I'm injection drips</li>
        <h6>A drip is sometimes known as a cannula, intravenous fluids or IV.

It is a short, small plastic tube. A doctor or nurse will use a needle to put the drip into your child's vein. The doctor or nurse will leave the plastic tube in so that fluids and medicines can go directly into the blood. Sometimes a doctor or nurse will also take blood samples using the tube.</h6>

        <li>Enema</li>
        <h6>Enema: Liquid injected into the rectum. An enema may be used for therapeutic (such as to stimulate evacuation of the bowels or heal inflammation of colon called colitis ) or diagnostic (such as imaging studies of the gastrointestinal tract - barium enema) purposes.</h6>

        <li>Bp check</li>
        <h6>A blood pressure test measures the pressure in your arteries as your heart pumps. You might have a blood pressure test as a part of a routine doctor's appointment or as a screening for high blood pressure (hypertension). Some people use a blood pressure test at home to better track their heart health.</h6>


        <li>urine pipe change</li>
<h6>A urinary tract infection (UTI) is an infection in any part of your urinary system — your kidneys, ureters, bladder and urethra. Most infections involve the lower urinary tract — the bladder and the urethra.

Women are at greater risk of developing a UTI than are men. Infection limited to your bladder can be painful and annoying. However, serious consequences can occur if a UTI spreads to your kidneys.

Doctors typically treat urinary tract infections with antibiotics. But you can take steps to reduce your chances of getting a UTI in the first place.</h6>

        <li>food pipe change</li>
<h6>Esophagectomy is a surgical procedure to remove some or all of the swallowing tube between your mouth and stomach (esophagus) and then reconstruct it using part of another organ, usually the stomach. Esophagectomy is a common treatment for advanced esophageal cancer and is used occasionally for Barrett's esophagus if aggressive precancerous cells are present. An esophagectomy may also be recommended for noncancerous conditions when prior attempts to save the esophagus have failed, such as with end-stage achalasia or strictures, or after ingestion of material that damages the lining of the esophagus.</h6>

        <li>traechestomy tube change</li>
<h6>Tracheostomy has been performed since 1500 BCE and is one of the oldest reported surgical procedures in the medical literature.   Before the 19th century, however, the procedure was fraught with difficulty, and only a limited number of successful tracheostomies were reported. During this early period, the indications for tracheostomy were few, but beginning in the early 20th century, with the work of Chevalier Q Jackson, the procedure was refined and standardized. 

As experience with the procedure grew within the surgical community, its morbidity and mortality decreased, and its indications were broadened. In 1999, more than 83,000 tracheostomies were placed in the United States, most commonly for purposes of mechanical ventilation in chronically ill patients

eMedicine Logo
</h6>

        <li>suture removal</li>
        <h6>Sutures may be absorbent (dissolvable) or non-absorbent (must be removed). Non-absorbent sutures are usually removed within 7 to 14 days. Suture removal is determined by how well the wound has healed and the extent of the surgery. Sutures must be left in place long enough to establish wound closure with enough strength to support internal tissues and organs.

The healthcare provider must assess the wound to determine whether or not to remove the sutures. The wound line must also be observed for separations during the process of suture removal. Removal of sutures must be ordered by the primary healthcare provider (physician or nurse practitioner). An order to remove sutures must be obtained prior to the procedure, and a comprehensive assessment of the wound site must be performed prior to the removal of the sutures by the healthcare provider.</h6>

<Link to="/tests"><button>Book This Service</button></Link>
    </div>
</div>

    <div className="menus">

<img src={img60} alt={img60} />
<h1>4.4/ <span> 5</span></h1>
<p>650+ Facebook Reviews</p>
<img src={img61} alt={img61} />
<h1>4.1/<span> 5</span></h1>
<p>900+ Google Reviews</p>
    </div>
</div>


</div>

<Footer />
        </>
    )
}
