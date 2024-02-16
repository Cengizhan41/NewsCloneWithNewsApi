import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { StyledCategoryList } from '../StyledComponents/StyledCategoryList'
import { categories } from '../Categories'

function CategoriesLayout() {
  
  return (
    <div className="categoriesLayout">
            <StyledCategoryList className="list-group categories-list flex-row justify-content-center p-2">
              {
                categories.map((cat,index)=>{
                  return (
                    <li key={index} className="list-group-item"><NavLink className='nav-link' to={`/categories/${(cat.catName).toLowerCase()}`}>{cat.catName}</NavLink></li>
                  )
                })
              }
            </StyledCategoryList>
            <div className="dynamic-part container">
            <Outlet/>
            </div>
    </div>
  )
}

export default CategoriesLayout