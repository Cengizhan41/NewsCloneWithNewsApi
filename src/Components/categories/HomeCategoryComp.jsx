import React from 'react'
import { Link } from 'react-router-dom'

function HomeCategoryComp({imgSrc,catName}) {
  return (
        <div className="col-lg-4 col-6 my-2">
        <Link to={`categories/${catName.toLowerCase()}`} className="card card-categories text-bg-dark  mx-auto">
          <img src={imgSrc} className="card-img" alt={imgSrc}/>
          <div className="card-img-overlay">
           <span className='btn homeCategoryCompLink p-2 fs-2' >{catName}</span>
          </div>
        </Link>
        </div>   
  )
}

export default HomeCategoryComp