import React from 'react'
import pic1 from '../images/bgrem3.jpg'
import pic2 from '../images/bgremove.png'
import pic3 from '../images/rem2.png'
function About() {
  return (
    <>
  <h1 className='text-center mt-5 '>Welcome to About Us Page</h1>

<div id="carouselExampleControls" className="carousel slide container-fluid mt-5" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src = {pic1} className="d-block h-20 w-40 rounded mx-auto"  alt="..."/>
    </div>
    <div className="carousel-item fit text-center">
      <img src = {pic2} className="d-block w-40 h-20 img-fluid rounded mx-auto" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src = {pic3} className="d-block w-40 h-20 img-fluid rounded mx-auto" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<div className="container">
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores id atque blanditiis error deserunt corporis qui! Sit eligendi at repudiandae recusandae quisquam rem minima animi nisi architecto expedita blanditiis dolorem labore illum, veritatis ea cumque nesciunt velit, nam possimus optio saepe. At, nam. Quia sint debitis iusto delectus beatae quas.</p>
</div>

    </>
  );
}
export default About;
