import '../css/navbar.css';
import Miniheader from '../components/miniHeader';
import Header from "../components/Header";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import allergy from '../api/allergy';

import { IoMdAdd } from 'react-icons/io';
import '../css/test.css';
// import BookTest from '../props/BookTest';

import {Link} from "react-router-dom";
export default function Test() {



    return (
        <div>
   {/* <BookTest /> */}
        <Miniheader />
     <Header />
            <Navbar services={true}/>
            <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Services
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Labtest
          </li>
        </ol>
      </nav>
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
