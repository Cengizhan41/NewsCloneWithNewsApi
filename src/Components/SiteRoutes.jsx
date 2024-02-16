import React from 'react'
import HomePage from '../Pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import SearchResults from '../Pages/SearchResults'
import NotFound from './NotFound'
import CategoriesLayout from '../Pages/CategoriesLayout'
import CountryNews from './CountryNews'
import CategoryNews from './categories/CategoryNews'

function SiteRoutes() {
  return (
    <Routes>
    <Route path='/' element={ <HomePage/> }/>
    <Route path='/categories' element={ <CategoriesLayout/> }>
      <Route index={true} element={ <NotFound/> }/> 
      <Route path=':catName' element={ <CategoryNews/> }/>
    </Route>
    <Route path='/search' element={ <SearchResults/> }/>
    <Route path='/headlines/:countryShortName' element={ <CountryNews/> }/>
    <Route path='*' element={ <NotFound/> }/>
  </Routes>
  )
}

export default SiteRoutes