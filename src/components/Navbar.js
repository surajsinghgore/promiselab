import "../css/navbar.css";
import {Link} from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
export default function Navbar() {
  return (
    <div className="navbar" data-spy="affix" data-offset-top="197">
      <div className="links">
        <Link to="/">
    
          <li className="active">HOME</li>
        </Link>
      
        <a>
          <li>
            SERVICES <RiArrowDropDownLine id="drop" />
            <ul>
<a><li>Doctors</li></a>
<a><li>Labtest</li></a>
<a><li>Rediology</li></a>


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
<a><li>Book a Test</li></a>
<a><li>Download Report</li></a>
<a><li>My Report</li></a>
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
        <a>
          <li>CONTACT US </li>
        </a>
      </div>
    </div>
  );
}
