import img1 from '../Images/8.jpg';
import img2 from '../Images/14.jpg';
import img3 from '../Images/6.jpg';
import '../css/coursel.css';

export default function HomeImg() {
    return (
        <>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img3} className="d-block w-100" alt={img3} />
      <div className="carousel-caption d-none d-md-block">
       
         <button id="btn">Book Home Collection</button>
        <p id="des">A certified professional will collect your sample from your preferred location</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={img2} className="d-block w-100" alt={img2}/>
      <div className="carousel-caption d-none d-md-block">
        {/* <h5 id="title">Reliable & High-Quality Laboratory Services</h5> */}
        <button id="btn">Download Report</button>
        <p id="des">We employ the latest technology and innovations</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={img1} className="d-block w-100" alt={img3} />
      <div className="carousel-caption d-none d-md-block">
        <h5 id="title">WE ARE A MEDICAL TESTING LABORATORY SERVICE</h5>
        <p id="des">We offer a complete range of tests for diagnosis, screening or evaluation of diseases and health conditions</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</>
    )
}
