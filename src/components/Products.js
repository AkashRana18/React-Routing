import React from 'react'
import p1 from '../images/bgremove.png'
import p2 from '../images/bgremove.png'
import p3 from '../images/bgremove.png'


function Products() {
  return (
    <>
      <div className="container-fluid  text-center mt-5">
        <h1>Welcome to Products section </h1>


  
      </div>
      <div className="container mt-5">
        <div className="row mx-auto">
          <div className="col-md-4">
            <div class="card" style={{ width: '18rem' }}>
              <img src={p1} class="card-img-top img-fluid" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href='/' class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div class="card" style={{ width: '18rem' }}>
              <img src={p2} class="card-img-top img-fluid" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href='/' class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div class="card" style={{ width: '18rem' }}>
              <img src={p3} class="card-img-top img-fluid" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href='/' class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className='text-center text-dark'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ipsa similique nihil inventore quo magni recusandae quis magnam sapiente id excepturi pariatur doloribus ducimus voluptate laboriosam sint non rerum facilis harum autem aliquam voluptatibus, exercitationem molestias veritatis. Nostrum obcaecati voluptas veniam voluptatum doloremque quo repellat cum rem numquam ipsum? Tempore?</p>
    </>
  );
}
export default Products;