import "../css/navbar.css";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useCart } from "react-use-cart";

export default function Navbar(props) {
  const filters = () => {
    //! home active
    if (props.home) {
      return (
        <>
          <div className="navbar">
            <div className="links">
              <Link to="/">
                <li className="active">HOME</li>
              </Link>

              <li>
                SERVICES <RiArrowDropDownLine id="drop" />
                <ul>
                  <Link to="/doctor">
                    <li>Doctors</li>
                  </Link>
                  <Link to="/tests">
                    <li>Blood Labtest</li>
                  </Link>
                  <Link to="/rediology">
                    <li>Rediology</li>
                  </Link>
                  <Link to="/appointment">
                    <li>Appointment</li>
                  </Link>
                  <Link to="/homeServices">
                    <li>Home Service</li>
                  </Link>
                  <Link to="/covid19">
                    <li>COVID 19 Test</li>
                  </Link>
                </ul>
              </li>

              <Link to="/gallery">
                <li>GALLERY</li>
              </Link>

              <li>
                PATIENTS <RiArrowDropDownLine id="drop" />
                <ul>
                  <Link to="/patient_login">
                    <li>Download Report</li>
                  </Link>
                  <Link to="/patient_login">
                    <li>Patient Dashboard</li>
                  </Link>
                </ul>
              </li>

              <li>
                DOCTORS <RiArrowDropDownLine id="drop" />
                <ul>
                  <Link to="/">
                    <li>Doctor Daskboard</li>
                  </Link>
                  <Link to="/">
                    <li>Doctor Timing</li>
                  </Link>
                </ul>
              </li>

              <Link to="/contactus">
                <li>
                  CONTACT<span id="white">_</span>US{" "}
                </li>
              </Link>
            </div>
            <div className="cart">
              <Link to="/cartpage">
                <AiOutlineShoppingCart id="cart" title="Cart Items" />
                <div id="noti" title="Cart Items">
                  {totalUniqueItems}
                </div>
              </Link>
            </div>
          </div>
        </>
      );
    }

    // ! services active
    else if (props.services) {
      return (
        <>
          <div className="navbar">
            <div className="links">
              <Link to="/">
                <li>HOME</li>
              </Link>

              <li className="active">
                SERVICES <RiArrowDropDownLine id="drop" />
                <ul>
                  <Link to="/doctor">
                    <li>Doctors</li>
                  </Link>
                  <Link to="/tests">
                    <li>Blood Labtest</li>
                  </Link>
                  <Link to="/rediology">
                    <li>Rediology</li>
                  </Link>
                  <Link to="/appointment">
                    <li>Appointment</li>
                  </Link>
                  <Link to="/homeServices">
                    <li>Home Service</li>
                  </Link>
                  <Link to="/covid19">
                    <li>COVID 19 Test</li>
                  </Link>
                </ul>
              </li>

              <Link to="/gallery">
                <li>GALLERY</li>
              </Link>

              <li>
                PATIENTS <RiArrowDropDownLine id="drop" />
                <ul>
                  <Link to="/patient_login">
                    <li>Download Report</li>
                  </Link>
                  <Link to="/patient_login">
                    <li>Patient Dashboard</li>
                  </Link>
                </ul>
              </li>

              <li>
                DOCTORS <RiArrowDropDownLine id="drop" />
                <ul>
                  <Link to="/">
                    <li>Doctor Daskboard</li>
                  </Link>
                  <Link to="/">
                    <li>Doctor Timing</li>
                  </Link>
                </ul>
              </li>

              <Link to="/contactus">
                <li>
                  CONTACT<span id="white">_</span>US{" "}
                </li>
              </Link>
            </div>
            <div className="cart">
              <Link to="/cartpage">
                <AiOutlineShoppingCart id="cart" title="Cart Items" />
                <div id="noti" title="Cart Items">
                  {totalUniqueItems}
                </div>
              </Link>
            </div>
          </div>
        </>
      );
    }

    // !gallery active
    else if (props.gallery) {
      return (
        <>
          <div className="navbar">
            <div className="links">
              <Link to="/">
                <li>HOME</li>
              </Link>

              <li>
                SERVICES <RiArrowDropDownLine id="drop" />
                <ul>
                  <Link to="/doctor">
                    <li>Doctors</li>
                  </Link>
                  <Link to="/tests">
                    <li>Blood Labtest</li>
                  </Link>
                  <Link to="/rediology">
                    <li>Rediology</li>
                  </Link>
                  <Link to="/appointment">
                    <li>Appointment</li>
                  </Link>
                  <Link to="/homeServices">
                    <li>Home Service</li>
                  </Link>
                  <Link to="/covid19">
                    <li>COVID 19 Test</li>
                  </Link>
                </ul>
              </li>

              <li className="active">GALLERY</li>

              <li>
                PATIENTS <RiArrowDropDownLine id="drop" />
                <ul>
                  <Link to="/patient_login">
                    <li>Download Report</li>
                  </Link>
                  <Link to="/patient_login">
                    <li>Patient Dashboard</li>
                  </Link>
                </ul>
              </li>

              <li>
                DOCTORS <RiArrowDropDownLine id="drop" />
                <ul>
                  <Link to="/">
                    <li>Doctor Daskboard</li>
                  </Link>
                  <Link to="/">
                    <li>Doctor Timing</li>
                  </Link>
                </ul>
              </li>

              <Link to="/contactus">
                <li>
                  CONTACT<span id="white">_</span>US{" "}
                </li>
              </Link>
            </div>
            <div className="cart">
              <Link to="/cartpage">
                <AiOutlineShoppingCart id="cart" title="Cart Items" />
                <div id="noti" title="Cart Items">
                  {totalUniqueItems}
                </div>
              </Link>
            </div>
          </div>
        </>
      );
    }

    // ! patient active
    else if (props.patient) {
      return (
        <>
          <div className="navbar">
            <div className="links">
              <Link to="/">
                <li>HOME</li>
              </Link>

              <li>
                SERVICES <RiArrowDropDownLine id="drop" />
                <ul>
                  <Link to="/doctor">
                    <li>Doctors</li>
                  </Link>
                  <Link to="/tests">
                    <li>Blood Labtest</li>
                  </Link>
                  <Link to="/rediology">
                    <li>Rediology</li>
                  </Link>
                  <Link to="/appointment">
                    <li>Appointment</li>
                  </Link>
                  <Link to="/homeServices">
                    <li>Home Service</li>
                  </Link>
                  <Link to="/covid19">
                    <li>COVID 19 Test</li>
                  </Link>
                </ul>
              </li>

              <Link to="/gallery">
                <li>GALLERY</li>
              </Link>

              <li className="active">
                PATIENTS <RiArrowDropDownLine id="drop" />
                <ul>
                  <Link to="/patient_login">
                    <li>Download Report</li>
                  </Link>
                  <Link to="/patient_login">
                    <li>Patient Dashboard</li>
                  </Link>
                </ul>
              </li>

              <li>
                DOCTORS <RiArrowDropDownLine id="drop" />
                <ul>
                  <Link to="/">
                    <li>Doctor Daskboard</li>
                  </Link>
                  <Link to="/">
                    <li>Doctor Timing</li>
                  </Link>
                </ul>
              </li>

              <Link to="/contactus">
                <li>
                  CONTACT<span id="white">_</span>US{" "}
                </li>
              </Link>
            </div>
            <div className="cart">
              <Link to="/cartpage">
                <AiOutlineShoppingCart id="cart" title="Cart Items" />
                <div id="noti" title="Cart Items">
                  {totalUniqueItems}
                </div>
              </Link>
            </div>
          </div>
        </>
      );
    }

    // ! doctor active
    else if (props.doctor) {
      return (
        <>
          <div className="navbar">
            <div className="links">
              <Link to="/">
                <li>HOME</li>
              </Link>

              <li>
                SERVICES <RiArrowDropDownLine id="drop" />
                <ul>
                  <Link to="/doctor">
                    <li>Doctors</li>
                  </Link>
                  <Link to="/tests">
                    <li>Blood Labtest</li>
                  </Link>
                  <Link to="/rediology">
                    <li>Rediology</li>
                  </Link>
                  <Link to="/appointment">
                    <li>Appointment</li>
                  </Link>
                  <Link to="/homeServices">
                    <li>Home Service</li>
                  </Link>
                  <Link to="/covid19">
                    <li>COVID 19 Test</li>
                  </Link>
                  <Link to="/appointment">
                    <li>Appointment</li>
                  </Link>
                  <Link to="/homeServices">
                    <li>Home Service</li>
                  </Link>
                  <Link to="/covid19">
                    <li>COVID 19 Test</li>
                  </Link>
                </ul>
              </li>

              <Link to="/gallery">
                <li>GALLERY</li>
              </Link>

              <li>
                PATIENTS <RiArrowDropDownLine id="drop" />
                <ul>
                  <Link to="/patient_login">
                    <li>Download Report</li>
                  </Link>
                  <Link to="/patient_login">
                    <li>Patient Dashboard</li>
                  </Link>
                </ul>
              </li>

              <li className="active">
                DOCTORS <RiArrowDropDownLine id="drop" />
                <ul>
                  <Link to="/">
                    <li>Doctor Daskboard</li>
                  </Link>
                  <Link to="/">
                    <li>Doctor Timing</li>
                  </Link>
                </ul>
              </li>

              <Link to="/contactus">
                <li>
                  CONTACT<span id="white">_</span>US{" "}
                </li>
              </Link>
            </div>
            <div className="cart">
              <Link to="/cartpage">
                <AiOutlineShoppingCart id="cart" title="Cart Items" />
                <div id="noti" title="Cart Items">
                  {totalUniqueItems}
                </div>
              </Link>
            </div>
          </div>
        </>
      );
    }

    // ! cotactus active
    else {
      return (
        <>
          <div className="navbar">
            <div className="links">
              <Link to="/">
                <li>HOME</li>
              </Link>

              <li>
                SERVICES <RiArrowDropDownLine id="drop" />
                <ul>
                  <Link to="/doctors">
                    <li>Doctors</li>
                  </Link>
                  <Link to="/tests">
                    <li>Blood Labtest</li>
                  </Link>
                  <Link to="/rediology">
                    <li>Rediology</li>
                  </Link>
                  <Link to="/appointment">
                    <li>Appointment</li>
                  </Link>
                  <Link to="/homeServices">
                    <li>Home Service</li>
                  </Link>
                  <Link to="/covid19">
                    <li>COVID 19 Test</li>
                  </Link>
                </ul>
              </li>

              <Link to="/gallery">
                <li>GALLERY</li>
              </Link>

              <li>
                PATIENTS <RiArrowDropDownLine id="drop" />
                <ul>
                  <Link to="/patient_login">
                    <li>Download Report</li>
                  </Link>
                  <Link to="/patient_login">
                    <li>Patient Dashboard</li>
                  </Link>
                </ul>
              </li>

              <li>
                DOCTORS <RiArrowDropDownLine id="drop" />
                <ul>
                  <Link to="/">
                    <li>Doctor Daskboard</li>
                  </Link>
                  <Link to="/">
                    <li>Doctor Timing</li>
                  </Link>
                </ul>
              </li>

              <Link to="/contactus">
                <li className="active">
                  CONTACT<span id="white">_</span>US{" "}
                </li>
              </Link>
            </div>
            <div className="cart">
              <Link to="/cartpage">
                <AiOutlineShoppingCart id="cart" title="Cart Items" />
                <div id="noti" title="Cart Items">
                  {totalUniqueItems}
                </div>
              </Link>
            </div>
          </div>
        </>
      );
    }
  };
  const { totalUniqueItems } = useCart();
  return <>{filters()}</>;
}
