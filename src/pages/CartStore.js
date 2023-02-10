import Header from '../components/Header';
import Footer from '../components/footer';
import {Link} from "react-router-dom";
import '../css/cartpage.css';
import { BiArrowBack } from 'react-icons/bi';
import { MdOutlineDelete } from 'react-icons/md';
import { FaWindowMinimize } from 'react-icons/fa';
import { MdRemoveShoppingCart } from 'react-icons/md';
import { MdDeleteSweep } from 'react-icons/md';
import { useCart } from 'react-use-cart';


export default function CartStore() {
   
   
    const {
        isEmpty,
        totalUniqueItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
        items
    }=useCart();

    return (
        <>
 <Header />

<div className="cartPage">
<div className="back">
      <p><Link to="/"><span id="change"><BiArrowBack id="back"/> Previous Page</span> </Link> / cartPage</p>
</div>

{/* empty card message */}
{(items.length===0)?<div className="emptys">
   <MdRemoveShoppingCart id="cart" />
   <h1>Cart is Empty . Please Add some Test</h1>
</div> : ' '}




{/* tests */}
{(isEmpty)? '':<>  
<button id="clearCart" onClick={()=>emptyCart()}><MdDeleteSweep id="empty" />Empty Cart</button>

<div className="testselected">
<h3>Test Selected</h3>
<div className="tests">
    <table>
        <tr>
            <th id="tstt">PACKAGE/TEST NAME</th>
            <th>DISCOUNT</th>
            <th>TEST PRICE (₹)</th>
            <th>Qtn</th>
            <th></th>
            <th>ACTION</th>
        </tr>
        {items.map((item,ind)=>{
           return(
               <>
           
            <tr id="ttt">
     
     <td id="tst">{item.test}</td>
     <td id="dc">-</td>
     <td>{item.price}</td>
     <td>{item.quantity}</td>
     <td><button id="btnMini" title="Minimize Quantity" onClick={()=>updateItemQuantity(item.id, item.quantity-1)}><FaWindowMinimize id="mini"/></button></td>
     <td><MdOutlineDelete id="del" title="Remove" onClick={()=>removeItem(item.id)}/></td>
   
 </tr>
 </>
           )
        })}
     

   
     
    </table>
</div>

</div>

<div className="prices">
<h3>Review Your Order</h3>

<div className="pirce">
<h6>Price</h6>
    {/* <li><span id="left"> Total Item </span><span id="right">{totalItems}</span> </li> */}
    <li>Total Test <span id="right">{totalUniqueItems}</span></li>
   <div id="amout">TOTAL PAYABLE AMOUNT </div><div id="pri">{cartTotal}</div>
 <p></p>
    <button>Book Test
    </button>
</div>
</div>
</>}
</div>

<Footer />
        </>
    )
}
