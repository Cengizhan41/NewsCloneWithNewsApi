import React, { useContext, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import fetchActionsHook from '../CustomHooks/fetchActionsHook';
import { SiteContext } from '../Context/SiteContext';
import { StyledSearchResults } from '../StyledComponents/StyledSearchResults';
import LoadingComp from '../Components/LoaindComp';
import NotFound from '../Components/NotFound';

function SearchResults() {

  const {apiKey}=useContext(SiteContext)
  const [data,loading,error,getUrl]=fetchActionsHook()
  const [searchParams,setSearchParams]=useSearchParams();
  const query=searchParams.get("q")

  useEffect(()=>{
    getUrl(` https://newsapi.org/v2/everything?language=tr&q=${query}&from=2024-02-15&to=2024-02-15&sortBy=popularity&apiKey=${apiKey}`)
  },[query])

  console.log(data)
  return (
    loading==true ?
    <LoadingComp/>
    : 
     (error==true || data?.articles?.length==0 ? 
     <NotFound/>
     :
  (
    <StyledSearchResults className="container my-3">
    <div className="row">
      {
      data?.articles?.map((news,index)=>{
        return  (

          <div className="col-xl-12 col-lg-4 col-6 containerColumn">
          <a href={news?.url} target='blank' key={index} className="card mb-3">
        <div className="row g-0">
          <div className="col-xl-4">
            <div className="img-wrap">
            <img src={news?.urlToImage} className="img-fluid rounded" alt={news?.title}/>
            </div>
          </div>
          <div className="col-xl-8">
            <div className="card-body d-flex flex-column justify-content-between">
              <h5 className="card-title border-bottom pb-2">{news?.title}</h5>
              <p className="card-text cardtext1 card-description">{news?.description}</p>
              <p className="card-text cardtext2  text-end d-flex flex-column">
                <h5 className='fw-bold me-3'>{news?.author}</h5>
                <small className='fst-italic ms-auto card-published'>Published At {(news?.publishedAt)?.slice(0,10)} - {(news?.publishedAt)?.slice(11,16)}</small>
              </p>
            </div>
          </div>
        </div>
      </a>
          </div>
        )
      })
      }
     
    </div>
  </StyledSearchResults>
  )
  )

   

  )
}

export default SearchResults