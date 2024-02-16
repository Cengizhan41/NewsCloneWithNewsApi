import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import fetchActionsHook from '../../CustomHooks/fetchActionsHook'
import { SiteContext } from '../../Context/SiteContext';
import { StyledCountryCategoryNews } from '../../StyledComponents/StyledCountryCategoryNews';
import LoadingComp from '../LoaindComp';
import NotFound from '../NotFound';

function CategoryNews() {
    const {catName}=useParams();
    const {apiKey}=useContext(SiteContext)

    const [data,loading,error,getUrl]=fetchActionsHook()
    useEffect(()=>{
    getUrl(`https://newsapi.org/v2/top-headlines?country=tr&category=${catName}&apiKey=${apiKey}`)
    // getUrl(`https://newsapi.org/v2/top-headlines/sources?category=${catName}&apiKey=${apiKey}`)
    },[catName])

    console.log(data)
    
  return (
    loading==true ?
    <LoadingComp/>
    : 
     (error==true ? 
     <NotFound/>
     :
     (
      <StyledCountryCategoryNews className="container my-3">
      <div className="row">
  {data?.articles?.map((news,index)=>{
    return (
      <div key={index} className="col-xl-4 col-6 my-3">
      <a href={news?.url} target='blank' className="card categoryCard shadow">
      <div className="card-header  d-flex align-items-center justify-content-between">
     <h4 className='mb-0'>{news?.author}</h4>
     <h4 className='mb-0'> {news?.country?.toUpperCase()}</h4>
      </div>
      <div className="card-body">
          <blockquote className="blockquote mb-0">
          <p className='newsTitle mb-0'>{news?.title?.length >= 250 ? `${news?.title?.slice(0,250)}..` : news?.title }</p>
          <footer className="blockquote-footer mt-auto"> 
          <cite className='fs-5'>Published At </cite> 
          <span>{(news.publishedAt)?.slice(0,10)} - {(news.publishedAt)?.slice(11,16)}</span>
          </footer>
          </blockquote>
      </div>
      </a>
  </div>
    ) 
  })}
  </div>
  </StyledCountryCategoryNews>
     )
     )
  
  )
}

export default CategoryNews