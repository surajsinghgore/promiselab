import '../css/career.css';
import Header from '../components/Header';
import Footer from '../components/footer';
import Navbar from '../components/Navbar';
import {Link} from "react-router-dom";

export default function Career() {
    return (
        <>
                  <Header />
<Navbar home="true"/>


<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><Link to="/">Home</Link></li>
    <li class="breadcrumb-item active" aria-current="page">Career</li>
  </ol>
</nav>
<div className="career">
<h1>Sorry No Career Is Available Right Now</h1>

</div>


<Footer/>
        </>
    )
}
