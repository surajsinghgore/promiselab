import '../css/navbar.css';
import Miniheader from '../components/miniHeader';
import Header from "../components/Header";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import allergy from '../api/allergy';

import { IoMdAdd } from 'react-icons/io';
import '../css/test.css';
import BookTest from '../props/BookTest';
export default function Test() {


    return (
        <div>
   <BookTest />
        <Miniheader />
     <Header />
            <Navbar />

<div className="allergy">
<h1>ALLERGY </h1>
<div className="list">

{allergy.map(name =>( 
 
    <li>  <p> {name.test}</p><IoMdAdd className="icons" title="Book Test" /></li>  
        ))}  



</div>
</div>




            <Footer />
        </div>
    )
}
