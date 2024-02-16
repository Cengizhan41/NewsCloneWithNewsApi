import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { StyledHome } from '../StyledComponents/StyledHome'
import HomeCategoryComp from '../Components/categories/HomeCategoryComp'
import { categories } from '../Categories'
import HomeCountryComp from '../Components/categories/HomeCountryComp'
import { SiteContext } from '../Context/SiteContext'

function HomePage() {
  return (

    <StyledHome>
    <div className="row align-items-center container  mx-auto my-3">
      <div className="col-lg-5 align-self-center">
        <div className="home-hero ">
        <h1 className="display-5 fw-bold  mb-3  ms-sm-5">This website will help you find news about everything.</h1>
        <p className="lead  ms-sm-5">You can search by category or keyword and find all the information you are looking for.</p>
        </div>
      </div>
      <div className="col-lg-7">
      <HomeCountryComp/>
      </div>
    </div>
    <div className="row container categories mx-auto my-3 row-gap-3">
      {
        categories.map((cat,index)=>{
          if(cat.catName=="General"){
            return(
              <div key={index} className="col-lg-4 align-self-center ">
              <Link to={`categories/${cat.catName.toLowerCase()}`} className="card card-categories general-card text-bg-dark shadow mx-auto">
                <img src={cat.img} className="card-img" alt={cat.img}/>
                <div className="card-img-overlay">
                <span className='btn homeCategoryCompLink p-2 fs-2' >{cat.catName} News</span>
                </div>
              </Link>
              </div>
            )
          }
 
        })
      }

      <div className="col-lg-8">
        <div className="row">
          {
              categories.map((cat,index)=>{
                if(cat.catName!="General"){
                  return <HomeCategoryComp key={index} imgSrc={cat.img} catName={cat.catName}/>
                }
              })
          }
        </div>
      </div>
    </div>
    </StyledHome>
    

  )
}

export default HomePage

