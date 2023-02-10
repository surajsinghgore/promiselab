import '../css/gallery.css';
import Header from '../components/Header';
import Footer from '../components/footer';
import Navbar from '../components/Navbar';
import {Link} from "react-router-dom";



// images
import imgs1 from '../Images/gallery/1.jpg';
import imgs2 from '../Images/gallery/2.jpg';
import imgs3 from '../Images/gallery/3.jpg';
import imgs4 from '../Images/gallery/4.jpg';
import imgs5 from '../Images/gallery/5.jpg';
import imgs6 from '../Images/gallery/6.jpg';
import imgs7 from '../Images/gallery/7.jpg';
import imgs8 from '../Images/gallery/8.webp';
import imgs9 from '../Images/gallery/9.jpg';



// big images
import imgs20 from '../Images/gallery/20.jpg';
import imgs21 from '../Images/gallery/21.jpg';
import imgs22 from '../Images/gallery/22.jpg';
import imgs23 from '../Images/gallery/23.jpg';
import imgs24 from '../Images/gallery/24.jpg';
import imgs25 from '../Images/gallery/25.jpg';
import imgs26 from '../Images/gallery/26.jpg';
import imgs27 from '../Images/gallery/27.jpg';
import imgs28 from '../Images/gallery/28.jpg';
import imgs29 from '../Images/gallery/29.jpg';
import imgs30 from '../Images/gallery/30.jpg';
import imgs31 from '../Images/gallery/31.jpg';
import imgs32 from '../Images/gallery/32.jpg';
import imgs33 from '../Images/gallery/33.jpg';
import imgs34 from '../Images/gallery/34.jpg';
import imgs35 from '../Images/gallery/35.jpg';
import imgs36 from '../Images/gallery/36.jpg';
import imgs37 from '../Images/gallery/37.jpg';
import imgs38 from '../Images/gallery/38.jpg';
import imgs39 from '../Images/gallery/39.jpeg';
import imgs40 from '../Images/gallery/40.jpg';
import imgs41 from '../Images/gallery/41.jpg';
import imgs42 from '../Images/gallery/42.jpg';
import imgs43 from '../Images/gallery/43.png';





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


<img src={imgs20} alt={imgs20} id="aa"/>
<img src={imgs24} alt={imgs24} id="aa"/>
<img src={imgs1} alt={imgs1} id="aa"/>
<img src={imgs25} alt={imgs25} id="aa"/>
<img src={imgs26} alt={imgs26} id="aa"/>
<img src={imgs2} alt={imgs2} id="aa"/>
<img src={imgs32} alt={imgs32} id="aa"/>
<img src={imgs33} alt={imgs33} id="aa"/>
<img src={imgs3} alt={imgs3} id="aa"/>
<img src={imgs39} alt={imgs39} id="aa"/>
<img src={imgs38} alt={imgs38} id="aa"/>



</div>

<div className="img2">
<img src={imgs21} alt={imgs21} id="aa"/>
<img src={imgs22} alt={imgs22} id="aa"/>
<img src={imgs4} alt={imgs4} id="aa"/>
<img src={imgs27} alt={imgs27} id="aa"/>
<img src={imgs28} alt={imgs28} id="aa"/>
<img src={imgs5} alt={imgs5} id="aa"/>
<img src={imgs34} alt={imgs34} id="aa"/>
<img src={imgs35} alt={imgs35} id="aa"/>
<img src={imgs6} alt={imgs6} id="aa"/>
<img src={imgs40} alt={imgs40} id="aa"/>
<img src={imgs41} alt={imgs41} id="aa"/>

</div>



<div className="img3">
<img src={imgs23} alt={imgs23} id="aa"/>
<img src={imgs29} alt={imgs29} id="aa"/>
<img src={imgs7} alt={imgs7} id="aa"/>
<img src={imgs30} alt={imgs30} id="aa"/>
<img src={imgs31} alt={imgs31} id="aa"/>
<img src={imgs8} alt={imgs8} id="aa"/>
<img src={imgs36} alt={imgs36} id="aa"/>
<img src={imgs37} alt={imgs37} id="aa"/>
<img src={imgs9} alt={imgs9} id="aa"/>
<img src={imgs42} alt={imgs42} id="aa"/>
<img src={imgs43} alt={imgs43} id="aa"/>


</div>

</div>

<Footer/>

        </>
    )
}
