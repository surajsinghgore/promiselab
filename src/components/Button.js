import { MdOutlineMedicalServices } from 'react-icons/md';
import {Link} from "react-router-dom";
import '../App.css';


export default function Button() {
    return (
        <div className="btn">
<MdOutlineMedicalServices className="md"/>
<Link to="/tests"> <button>Book Appointment</button></Link>
    </div>
    )
}
