import '../css/gallery.css';
import Header from '../components/Header';
import Footer from '../components/footer';
import Navbar from '../components/Navbar';
import {Link} from "react-router-dom";



// images
import img4 from '../Images/teams/4.jpg'
import img5 from '../Images/teams/5.jpg'
import img6 from '../Images/teams/6.jpg'
import img7 from '../Images/teams/7.jpg'
import img8 from '../Images/teams/8.jpg'
import img9 from '../Images/teams/9.jpg'
import img10 from '../Images/teams/10.jpg'
import img11 from '../Images/teams/11.jpg'
import img12 from '../Images/teams/12.jpg'
import img13 from '../Images/teams/13.jpg'
import img14 from '../Images/teams/14.jpg'
import img15 from '../Images/teams/15.jpg'
import img16 from '../Images/teams/16.jpg'
import img17 from '../Images/teams/17.jpg'
import img18 from '../Images/teams/18.jpg'
import img19 from '../Images/teams/19.jpg'
import img20 from '../Images/teams/20.jpg'
import img21 from '../Images/teams/21.jpg'


export default function Gallery() {
    return (
        <>
                   <Header />
<Navbar gallery={true}/>


<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><Link to="/">Home</Link></li>
    <li class="breadcrumb-item active" aria-current="page">Gallery</li>

  </ol>
</nav> 

<div className="gallery">

<div className="img1">
<img src={img15} alt={img15} id="bb"/>
<img src={img13} alt={img13} id="aa"/>
<img src={img14} alt={img14} id="aa"/>
<img src={img18} alt={img18} id="bb"/>
<img src={img6} alt={img6} id="aa"/>

<img src={img20} alt={img20} id="bb"/>


</div>

<div className="img2">
<img src={img4} alt={img4} id="aa"/>
<img src={img16} alt={img16} id="bb"/>
<img src={img9} alt={img9} id="aa"/>

<img src={img17} alt={img17} id="bb"/>
<img src={img12} alt={img12} id="aa"/>
<img src={img21} alt={img21} id="bb"/>

</div>



<div className="img3">
<img src={img5} alt={img5} id="aa"/>
<img src={img8} alt={img8} id="aa"/>
<img src={img7} alt={img7} id="bb"/>
<img src={img10} alt={img10} id="aa"/>
<img src={img11} alt={img11} id="aa"/>
<img src={img19} alt={img19} id="bb"/>

</div>

</div>

<Footer/>

        </>
    )
}
