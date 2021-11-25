import '../css/Certificate.css';
import iso from "../Images/iso.svg";
import srl from "../Images/srl.png";


export default function Certificate() {
    return (
        <div className="certficate">
            <h1>WHY CHOOSE US </h1>
            <div className="contain">
            <img src={iso} alt={iso} />
            <img src={srl} alt={srl} />
            <p id="fix">Associated with</p>
            </div>

        </div>
    )
}
