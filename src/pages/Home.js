import '../App.css';
import loder from '../Images/loder.gif';
import Certificate from '../components/Certificate';
import Footer from '../components/footer';
import Header from '../components/Header';
import HomeImg from '../components/HomeImg';
import MedicalServices from '../components/MedicalServices';
import Miniheader from '../components/miniHeader';
import Navbar from '../components/Navbar';
import WhoOur from '../components/WhoOur';
import Button from '../components/Button';


export default function Home() {
    const loaded=()=>{
        let loader=document.getElementById('loader');
        loader.style.display="none"
    
      }
    return (
<>

    <div className="App" onLoad={loaded}>
    <Button />
   <div id="loader">
     <img src={loder} alt={loder} />
   </div>

     <Miniheader />
     <Header />
<Navbar />
<HomeImg />
<MedicalServices />
<WhoOur />
<Certificate />

     <Footer />
    </div>
    </>
    )
}
