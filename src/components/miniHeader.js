import "../css/miniheader.css";

// brandicons
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";

export default function MiniHeader() {
  // showing search bar
  const shows = () => {
    var myClock = document.getElementById("show");

    var displaySetting = myClock.style.display;

    if (displaySetting === "block") {
      myClock.style.display = "none";
    } else {
      myClock.style.display = "block";
    }
  };
  return (
    <div className="miniheader">
      <div className="iconsss">
        <li>
          <FaFacebookF className="iconss" title="Facebook" />
        </li>
        <li>
          <AiOutlineInstagram className="iconss" title="Instagram" />
        </li>
        <li>
          <FaLinkedinIn className="iconss" title="Linkedin" />
        </li>
        <li>
          <AiFillYoutube className="iconss" title="Youtube" />
        </li>
      </div>

      <div className="rightIcons">
        <li>
          <BiSearchAlt2 className="icon" title="Search" onClick={shows} />
        </li>
      </div>

      {/* search bar popup */}
      <div className="searchbar" id="show">
        <div className="items">
         
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search Keyword"
            />
            <BiSearchAlt2 id="icon" title="Search" />
         
        </div>
      </div>
    </div>
  );
}
