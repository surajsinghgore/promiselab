import '../css/newCase.css';
import {Link} from "react-router-dom";

// import { AiFillStar } from 'react-icons/ai';


export default function NewCase() {
    
    return (
        <>
           <div className="newCase">
               <div className="leftsidebar">
<Link to="/"><li>Cases</li></Link>
<Link to="/"><li>Patients</li></Link>
<Link to="/"><li>Payment</li></Link>

               </div>
           <div className="rightformbar">
           <nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><Link to="/">Dashboard</Link></li>
    <li class="breadcrumb-item active" aria-current="page">New Case</li>
  </ol>

  <div className="newCaseform">
<form >
<div className="perosnal">
      <h1>PATIENT DETAILS</h1>
     <li>
<h6>Title</h6>
<select name="status" id="status">
    <option value="" selected>select</option>
    <option value="mr">mr.</option>
    <option value="mrs">mrs.</option>
    <option value="smt">smt.</option>
    <option value="kumari">kumari.</option>
    <option value="shri">shri.</option>
    <option value="miss">miss.</option>
    <option value="master">master.</option>
    <option value="mohd">mohd.</option>
    <option value="baby">baby.</option>
    <option value="baby_of">baby of.</option>
    <option value="ms">ms.</option>
    <option value="selvi">selvi.</option>
    <option value="prof">prof.</option>
    <option value="dr">dr.</option>
</select>
</li>
<li>
<h6><span>*</span>First Name</h6>
<input type="text" name="name" required/>
</li>

<li>
<h6>Last Name</h6>
<input type="text" name="name" />
</li>

<li>
<h6><span>*</span> Sex</h6>
<div id="m1">
<input type="radio" name="sex" id="male" value="male"/> <label htmlFor="male"> Male</label></div>
<div id="m1">
<input type="radio" name="sex" id="female" value="female"/> <label htmlFor="female"> Female</label></div>
<div id="m1">
<input type="radio" name="sex" id="transgender" value="transgender"/> <label htmlFor="transgender"> Transgender</label></div>
</li>

  
  <li>
  <h6>Aadhar No: (12 digits)</h6>
<input type="number" name="aadhar" id="aadhar" />
</li>

<li>
<h6><span>*</span> Age</h6>
<input type="text" name="year" placeholder="years"id="yr"/>
<input type="text" name="year" placeholder="months"id="yr"/>
<input type="text" name="year" placeholder="days"id="yr"/>
</li>
<li>
<h6><span>*</span> Mobile Number</h6>
<input type="number" name="mobile" id="mobile" required/>
</li>

<li>
<h6>Email</h6>
<input type="email" name="email" id="email" />
</li>

<li>
<h6>Address</h6>
<textarea name="address" id="address" ></textarea>
</li>
</div>


<div className="referred">
    <h1>CASE DETAILS</h1>
    <li>
    <h6><span>*</span> Referred By</h6>
    <select name="referred" id="refferred">
        <option value="no">No</option>
        <option value="Sudesh_Yadav">Mr. Sudesh Yadav</option>
        <option value="ravi">Ravi</option>
        <option value="harinder_kaushish">Dr. Harinder Haushish</option>
    </select>
</li>
<li>

    <h6><span>*</span> Collection centre</h6>
    <select name="center" id="center">
        <option value="main">Main</option>
        <option value="other">Other</option>
    </select>
</li>

<li>    <h6>Sample collection agent</h6>
    <input type="text"name="agent" id="agent"/>
</li>

</div>


<div className="testsdo">
    <h1>Which Test</h1>
</div>

<div className="payment">
    <h5>Total: Rs.</h5> <input type="text" name="totalamount" id="totalamount"/>
    <h5>Amount received.</h5> <input type="text" name="totalrececived" id="totalrececived"/>
    <h5>Discount</h5> <input type="number" name="discount" id="discount" />

    <h5>Mode</h5>
    <select name="mode" id="mode">
        <option value="cash">cash</option>
        <option value="upi">upi</option>
        <option value="card">card</option>
    </select>
</div>
      </form>
  </div>
</nav>


               
           </div>
           </div> 
        </>
    )
}
