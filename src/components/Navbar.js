import "../css/navbar.css";
import {Link} from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
export default function Navbar(props) {

  const filters = () => {

    //! home active
    if (props.home) {
        return (
            <>
  <div className="navbar" data-spy="affix" data-offset-top="197">
      <div className="links">
        <Link to="/">
    
          <li className="active">HOME</li>
        </Link>
      
        <a>
          <li>
            SERVICES <RiArrowDropDownLine id="drop" />
            <ul>
            <Link to="/doctor"><li>Doctors</li></Link>
<Link to="/tests"><li>Labtest</li></Link>
<Link to="/rediology"><li>Rediology</li></Link>
<a><li>Appointment</li></a>


            </ul>
          </li>
        </a>
        <a>
          <li>GALLERY</li>
        </a>
        <a>
          <li>
            PATIENTS <RiArrowDropDownLine id="drop" />
            <ul>
<Link to="/tests"><li>Book a Test</li></Link>
<Link to="/patient_login"><li>Download Report</li></Link>
<Link to="/patient_login"><li>Patient Login</li></Link>
<a><li>Home Service</li></a>
<a><li>COVID 19 Test</li></a>


            </ul>
          </li>
        </a>
        <a>
          <li>
            DOCTORS <RiArrowDropDownLine id="drop" />
            <ul>
<a><li>Doctor Daskboard</li></a>
<a><li>Doctor Timing</li></a>


            </ul>
          </li>
        </a>
        <Link to="/contactus">
          <li>CONTACT US </li>
        </Link>
      </div>
    </div>


</>
      );
    }


    // ! services active
    else if(props.services){
      return(
        <>
<div className="navbar" data-spy="affix" data-offset-top="197">
      <div className="links">
        <Link to="/">
    
          <li >HOME</li>
        </Link>
      
        <a>
          <li  className="active">
            SERVICES <RiArrowDropDownLine id="drop" />
            <ul>
<Link to="/doctor"><li>Doctors</li></Link>
<Link to="/tests"><li>Labtest</li></Link>
<Link to="/rediology"><li>Rediology</li></Link>
<a><li>Appointment</li></a>


            </ul>
          </li>
        </a>
        <a>
          <li>GALLERY</li>
        </a>
        <a>
          <li>
            PATIENTS <RiArrowDropDownLine id="drop" />
            <ul>
<Link to="/tests"><li>Book a Test</li></Link>
<Link to="/patient_login"><li>Download Report</li></Link>
<Link to="/patient_login"><li>Patient Login</li></Link>
<a><li>Home Service</li></a>
<a><li>COVID 19 Test</li></a>


            </ul>
          </li>
        </a>
        <a>
          <li>
            DOCTORS <RiArrowDropDownLine id="drop" />
            <ul>
<a><li>Doctor Daskboard</li></a>
<a><li>Doctor Timing</li></a>


            </ul>
          </li>
        </a>
        <Link to="/contactus">
          <li >CONTACT US </li>
        </Link>
      </div>
    </div>
        </>
      )
    }




    // !gallery active
    else if(props.gallery){
      return(
        <>
<div className="navbar" data-spy="affix" data-offset-top="197">
      <div className="links">
        <Link to="/">
    
          <li >HOME</li>
        </Link>
      
        <a>
          <li>
            SERVICES <RiArrowDropDownLine id="drop" />
            <ul>
<Link to="/doctor"><li>Doctors</li></Link>
<Link to="/tests"><li>Labtest</li></Link>
<Link to="/rediology"><li>Rediology</li></Link>
<a><li>Appointment</li></a>


            </ul>
          </li>
        </a>
        <a>
          <li  className="active">GALLERY</li>
        </a>
        <a>
          <li>
            PATIENTS <RiArrowDropDownLine id="drop" />
            <ul>
<Link to="/tests"><li>Book a Test</li></Link>
<Link to="/patient_login"><li>Download Report</li></Link>
<Link to="/patient_login"><li>Patient Login</li></Link>
<a><li>Home Service</li></a>
<a><li>COVID 19 Test</li></a>


            </ul>
          </li>
        </a>
        <a>
          <li>
            DOCTORS <RiArrowDropDownLine id="drop" />
            <ul>
<a><li>Doctor Daskboard</li></a>
<a><li>Doctor Timing</li></a>


            </ul>
          </li>
        </a>
        <Link to="/contactus">
          <li >CONTACT US </li>
        </Link>
      </div>
    </div>
        </>
      )
    }



    // ! patient active
    else if(props.patient){
      return(
        <>
<div className="navbar" data-spy="affix" data-offset-top="197">
      <div className="links">
        <Link to="/">
    
          <li >HOME</li>
        </Link>
      
        <a>
          <li>
            SERVICES <RiArrowDropDownLine id="drop" />
            <ul>
<Link to="/doctor"><li>Doctors</li></Link>
<Link to="/tests"><li>Labtest</li></Link>
<Link to="/rediology"><li>Rediology</li></Link>
<a><li>Appointment</li></a>


            </ul>
          </li>
        </a>
        <a>
          <li>GALLERY</li>
        </a>
        <a>
          <li  className="active">
            PATIENTS <RiArrowDropDownLine id="drop" />
            <ul>
<Link to="/tests"><li>Book a Test</li></Link>
<Link to="/patient_login"><li>Download Report</li></Link>
<Link to="/patient_login"><li>Patient Login</li></Link>
<a><li>Home Service</li></a>
<a><li>COVID 19 Test</li></a>


            </ul>
          </li>
        </a>
        <a>
          <li >
            DOCTORS <RiArrowDropDownLine id="drop" />
            <ul>
<a><li>Doctor Daskboard</li></a>
<a><li>Doctor Timing</li></a>


            </ul>
          </li>
        </a>
        <Link to="/contactus">
          <li >CONTACT US </li>
        </Link>
      </div>
    </div>
        </>
      )
    }



    // ! doctor active

    else if(props.doctor){
      return(
        <>
<div className="navbar" data-spy="affix" data-offset-top="197">
      <div className="links">
        <Link to="/">
    
          <li >HOME</li>
        </Link>
      
        <a>
          <li>
            SERVICES <RiArrowDropDownLine id="drop" />
            <ul>
<Link to="/doctor"><li>Doctors</li></Link>
<Link to="/tests"><li>Labtest</li></Link>
<Link to="/rediology"><li>Rediology</li></Link>
<a><li>Appointment</li></a>
<a><li>Appointment</li></a>

            </ul>
          </li>
        </a>
        <a>
          <li>GALLERY</li>
        </a>
        <a>
          <li>
            PATIENTS <RiArrowDropDownLine id="drop" />
            <ul>
<Link to="/tests"><li>Book a Test</li></Link>
<Link to="/patient_login"><li>Download Report</li></Link>
<Link to="/patient_login"><li>Patient Login</li></Link>
<a><li>Home Service</li></a>
<a><li>COVID 19 Test</li></a>


            </ul>
          </li>
        </a>
        <a>
          <li className="active">
            DOCTORS <RiArrowDropDownLine id="drop" />
            <ul>
<a><li>Doctor Daskboard</li></a>
<a><li>Doctor Timing</li></a>


            </ul>
          </li>
        </a>
        <Link to="/contactus">
          <li >CONTACT US </li>
        </Link>
      </div>
    </div>
        </>
      )
    }



    // ! cotactus active
    else {
      return(
        <>
  <div className="navbar" data-spy="affix" data-offset-top="197">
      <div className="links">
        <Link to="/">
    
          <li >HOME</li>
        </Link>
      
        <a>
          <li>
            SERVICES <RiArrowDropDownLine id="drop" />
            <ul>
<Link to="/doctors"><li>Doctors</li></Link>
<Link to="/tests"><li>Labtest</li></Link>
<Link to="/rediology"><li>Rediology</li></Link>
<a><li>Appointment</li></a>


            </ul>
          </li>
        </a>
        <a>
          <li>GALLERY</li>
        </a>
        <a>
          <li>
            PATIENTS <RiArrowDropDownLine id="drop" />
            <ul>
<Link to="/tests"><li>Book a Test</li></Link>
<Link to="/patient_login"><li>Download Report</li></Link>
<Link to="/patient_login"><li>Patient Login</li></Link>
<a><li>Home Service</li></a>
<a><li>COVID 19 Test</li></a>


            </ul>
          </li>
        </a>
        <a>
          <li>
            DOCTORS <RiArrowDropDownLine id="drop" />
            <ul>
<a><li>Doctor Daskboard</li></a>
<a><li>Doctor Timing</li></a>


            </ul>
          </li>
        </a>
        <Link to="/contactus">
          <li className="active">CONTACT US </li>
        </Link>
      </div>
    </div>
        </>
      )
    }
  };

  return (
    <>{filters()}</>
  );
}
