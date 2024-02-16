import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { SiteContext } from '../Context/SiteContext';
import fetchActionsHook from '../CustomHooks/fetchActionsHook';

import NotFound from './NotFound';
import LoadingComp from './LoaindComp';
import { StyledCountryCategoryNews } from '../StyledComponents/StyledCountryCategoryNews';

function CountryNews() {
    const {apiKey}=useContext(SiteContext)
    const {countryShortName}=useParams();

    const[data,loading,error,getUrl]=fetchActionsHook()
    useEffect(()=>{
        getUrl(`https://newsapi.org/v2/top-headlines?country=${countryShortName}&apiKey=${apiKey}`)
    },[])

    // console.log(data)
  return (
   
        loading==true ?
      <LoadingComp/>
      : 
       (error==true ? 
       <NotFound/>
       :
    (
        <div className="container my-3">
        <div className="row">
        {
            data?.articles?.map((news,index)=>{
                return(
                    <StyledCountryCategoryNews key={index} className="col-xl-4 col-6 my-3">
                        <a href={news.url} target='blank' className="card countryCard shadow">
                        <div className="card-header d-flex align-items-center">
                       <h4 className='mb-0'>{news?.author}</h4>
                        </div>
                        <div className="card-body">
                            <blockquote className="blockquote mb-0">
                            <p className='newsTitle mb-0'>{news?.title?.length >= 150 ? `${news?.title?.slice(0,150)}..` : news?.title }</p>
                            <footer className="blockquote-footer mt-auto"> 
                            <cite className='fs-5'>Published At </cite> 
                            <span>{(news.publishedAt)?.slice(0,10)} - {(news.publishedAt)?.slice(11,16)}</span>
                            </footer>
                            </blockquote>
                        </div>
                        </a>

                    </StyledCountryCategoryNews>
                )
            })
           
        }
             
    </div>
    </div>
    )
    )
        
   
  )
}

export default CountryNews