import React from 'react'
import { Link } from 'react-router-dom'
import { countries } from '../../Countries'

function HomeCountryComp() {
  return (
<div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    {
        countries.map((country,index)=>{
            return (
                <div key={index}  className={`carousel-item ${index==0 ? "active" : ""}`}>
                    <div   className={`card card-country text-bg-dark ms-auto my-3 me-3 shadow text-center `}>
                    <img src={country.countryImg} className="card-img" alt={country.countryName}/>
                    <div className="card-img-overlay">
                    <Link  to={`/headlines/${country.countryNameShort}`} className='card-title fs-3 fw-bold'>Top Headlines From {country.countryName}</Link>
                  </div>
                  </div>
                  </div>
            )
        })
    }
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default HomeCountryComp