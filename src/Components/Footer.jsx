import React from 'react'
import { NavLink } from 'react-router-dom'

import { FaMailBulk } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { StyledFooter } from '../StyledComponents/StyledFooter';
export default function Footer() {
  return (
    <StyledFooter className="py-1 mt-1   fs-5">
      <div className="d-flex flex-wrap justify-content-between align-items-center container">
    <div className="col-md-4 d-flex align-self-center ">
    <span className="text-muted fs-5 align-self-center">© 2024 Company, Inc</span>
      <NavLink to={"/"} className="mb-3 mx-2 mb-md-0 text-muted text-decoration-none fs-5 mt-3">
        <FaMailBulk className='mb-lg-3 '/>
      </NavLink> 
    </div>
    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex align-self-center">
      <li className="ms-3 "><a className="text-muted fs-1 " target='blank' href="https://github.com/Cengizhan41"><FaGithub className='mb-2' /></a></li>
    </ul>
    </div>
  </StyledFooter>
  )
}
