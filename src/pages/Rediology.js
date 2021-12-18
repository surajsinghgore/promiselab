import Header from "../components/Header";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdAddShoppingCart } from "react-icons/md";
import { MdPriceCheck } from "react-icons/md";
import { HiOutlineClipboardList } from "react-icons/hi";
import testData from "../api/RadiologyTest";
import "../css/rediology.css";
import { useState } from "react";
import { useCart } from 'react-use-cart';


export default function Rediology() {
    const [count,setCount]=useState({start: 0, end:24});
    const [state,setState]=useState();

    const {addItem}=useCart();
    const {
        totalUniqueItems,
    }=useCart();

  const [filterData, setFilterData] = useState([]);
  const [searchbarValue, setSearchbarValue] = useState([]);

  const handleInput = (e) => {
    setSearchbarValue(e.target.value);
    const userValue = e.target.value;
    const newFilterData = testData.filter((val) => {
      return val.test.toString().toLowerCase().includes(userValue.toLowerCase());
    });


    if (userValue === "") {
      setFilterData([]);
    } else {
      setFilterData(newFilterData);
    }
  };
  const hidebar=()=>{
      setSearchbarValue([]);
      setFilterData([]);

  }

// scroll page to top on button click
const [showScroll, setShowScroll] = useState(false)

const checkScrollTop = () => {
  if (!showScroll && window.pageYOffset > 400){
    setShowScroll(true)
  } else if (showScroll && window.pageYOffset <= 400){
    setShowScroll(false)
  }
};

const scrollTop = () =>{
  window.scrollTo({top: 0, behavior: 'smooth'});
};

window.addEventListener('scroll', checkScrollTop);
// page 1 move
const page1=()=>{
setState(true);
    setCount({start:0,end:24});
    scrollTop();
}


const page2=()=>{
setState(true);
    setCount({start:25,end:49});
    scrollTop();
}
const page3=()=>{
    setState(true);
    setCount({start:50,end:74});
    scrollTop();
}
const page4=()=>{
    setCount({start:75,end:99});
    scrollTop();
}

const page5=()=>{
    setCount({start:100,end:124});
    scrollTop();
}
const page6=()=>{
    setCount({start:125,end:149});
    scrollTop();
}
const page7=()=>{
    setCount({start:150,end:175});
    scrollTop();
}

const page8=()=>{
    setCount({start:176,end:199});
    scrollTop();
}
const page9=()=>{
    setCount({start:200,end:224});
    scrollTop();
}
const page10=()=>{
    setCount({start:225,end:234});
    scrollTop();
}
  return (
    <>
      <Header />
      <Navbar services={true} />
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
           Rediology
          </li>
        </ol>
      </nav>

      {/*!! rediology test */}
      <div className="rediology">
        {/* top bar which contain search and cart button */}
        <div className="topBar" id="topBar">
          <div className="searchBar">
            {filterData.length === 0 ? (
              <AiOutlineSearch id="ic" title="search.. " />
            ) : (
              <AiFillCloseCircle id="icc" title="close searchbar" onClick={hidebar} />
            )}

            <input
              type="text"
              id="search"
              placeholder="Search your medical test.."
              onChange={handleInput}
            value={searchbarValue}
            />

            {filterData.length !== 0 && (
              <div className="popup">
                {filterData.slice(0,15).map((item, index) => {
                  return (
                    <>
                      <li key={item.id}>
                        <h1> * {item.test}</h1>
                        <p>₹ {item.price}</p>
                        <button title="Book This Test" onClick={() => addItem(item)}>
                          <AiOutlineShoppingCart />
                          Add To Cart
                        </button>
                      </li>
                    </>
                  );
                })}
              </div>
            )}
          </div>

          <div className="cart">
            <Link to="/cartpage">
              <AiOutlineShoppingCart id="cart" title="cart item" title="Cart List"/><div id="noti">{totalUniqueItems}</div>
            </Link>
          </div>
        </div>





        {/* down tests */}

        <div className="testshow">
        {testData.slice(count.start,count.end).map((item,ind)=>{
            return(
                <>

                
            <div className="tests-items" key={item.id}>
                <h1><HiOutlineClipboardList id="iconn"/>{item.test}</h1>
                <h5><MdPriceCheck id="iconns"/>₹ {item.price}</h5>
                <button onClick={() => addItem(item)}><MdAddShoppingCart id="icons"/>ADD TO CART</button>
            </div>
</>
            )
        })}
        <div className="btn-section" >
            <button onClick={page1} className="actives">1</button>
            <button onClick={page2} className={(state)?".actives":""}>2</button>
            <button onClick={page3} className={(state)?".actives":""}>3</button>
            <button onClick={page4} id="pg4">4</button>
            <button onClick={page5} id="pg5">5</button>
            <button onClick={page6} id="pg6">6</button>
            <button onClick={page7} id="pg7">7</button>
            <button onClick={page8} id="pg8">8</button>
            <button onClick={page9} id="pg9">9</button>
            <button onClick={page10} id="pg10">10</button>
     
        </div>
        </div>
     
  
      </div>
      <Footer />
    </>
  );
}
