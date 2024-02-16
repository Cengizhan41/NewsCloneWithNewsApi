import React, { useContext, useState } from 'react'
import { FaMailBulk } from "react-icons/fa";
import { NavLink, useNavigate } from 'react-router-dom';
import { StyledNavbar } from '../StyledComponents/StyledNavbar';
import { FaSearch } from "react-icons/fa";
import { SiteContext } from '../Context/SiteContext';

function Navbar() {

  const navigasyon=useNavigate();
  const {control,setControl,alert,setAlert}=useContext(SiteContext)
  
  function searchFunc(e){
    e.preventDefault();
    // console.log(e.target.elements[0].value)
    if(e.target.elements[0].value.length >0){
      if(e.target.elements[0].value.length>=3){
        setAlert(false)
        const willSearch=e.target.elements[0].value
        console.log(willSearch)
        navigasyon(`/search?q=${willSearch}`)
        e.target.elements[0].value=""
        setAlert(false);
        setControl(false)

      }
      else{
        setAlert(true)
      }
    }
    else{
      setAlert(false)
      if(control==false){
        setControl(true)
      }
      else{
        setControl(false)
      }
    }
    
  }
  return (
  	<StyledNavbar className="navbar navbar-expand-lg bg-body-tertiary py-3">
  <div className="container">
  <NavLink className="navbar-brand fs-1 lead" to={"/"}><FaMailBulk className='mb-1 me-2'/>Find News</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <form onSubmit={searchFunc}  className={`d-flex ms-auto shadow ${control==false ? 'smallForm' :  'bigForm'}`} role="search">
      <input className={`form-control `} type="search" placeholder="Search -- Min 3 Letters.." aria-label="Search" />
      <button  className="btn  searchBtn" type="submit"><FaSearch/></button>
    </form>
    <div className={`alert alert-danger mb-0 p-2 text-center ms-lg-2 ${alert == true ? "d-block" : "d-none"}`} role="alert">
    Invalid value.
    </div>
    </div>
    
  </div>
</StyledNavbar>
  )
}

export default Navbar
