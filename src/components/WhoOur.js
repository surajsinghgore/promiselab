import '../css/whoOur.css';
import doctor from '../Images/doctor1.jpg';
export default function WhoOur() {
    return (
        <div className="who">
             <div className="div2"> 
            <h1>Who We Are</h1>
            <p>Promise Laboratories is a medical testing laboratory service that offers a complete range of tests for diagnosis, screening or evaluation of diseases and health conditions.
We are certified under the federal government’s Clinical Laboratory Improvement Amendments and operate in compliance with all governmental regulations. We use the latest diagnostic technology and innovations. Our laboratory technicians are well trained and have many years of experience. They  provide the most accurate and precise testing results.</p>

</div>
            <div className="div1"><img src={doctor} alt={doctor} /></div>
       
        </div>
    )
}
