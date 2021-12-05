import '../css/booktest.css';
import { BsBagPlusFill } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';

export default function BookTest() {
    const closes=()=>{
        let bbtest=document.getElementById('bbtest');
        let btest=document.getElementById('btest');
        bbtest.style.display="none";
        btest.style.display="none";
    }
    return (
        <>
        <div className="bbtest" id="bbtest">
        
        </div>
        <div className="btest" id="btest">
        <AiOutlineClose className="close" onClick={closes}/>
            <div className="top">
      
                <BsBagPlusFill className="bag" />
               <p> Book a Test</p>
            </div>
            <form action="">
                <input type="text" name="" placeholder="Patient Name *"/>
                <input type="text" name="" placeholder="Phone No *"/>
                <input type="text" name="" placeholder="Email*"/>
                <input type="text" name="" placeholder="Pincode*"/>
              <textarea name="address" placeholder="Adrress*"></textarea>
                <button>SUBMIT</button>
            </form>
            </div>
        </>
    )
}
