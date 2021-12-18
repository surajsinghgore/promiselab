import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineGoogle } from 'react-icons/ai';
import '../css/team.css';
export default function DoctorCard(props) {
    return (
        <div className="cards">
        <div className="card">
        <img src={props.img} alt={props.img} />
        <ul>
        <li><a href={props.fb} target="_blank" rel="noreferrer"><FaFacebookF id="icon"/></a></li>
        <li><a href={props.ist} target="_blank" rel="noreferrer"><AiOutlineInstagram id="icon"/></a></li>
        <li><a href={props.go} target="_blank" rel="noreferrer"><AiOutlineGoogle id="icon"/></a></li>
        </ul>
        </div>
        <h1>{props.name}</h1>
        <p>{props.des}</p>
        </div>
    )
}
