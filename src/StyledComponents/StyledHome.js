import styled from "styled-components";


export const StyledHome=styled.div`
.container{
    width: 90% !important;
}
.home-hero{
    h1,p{
        color: ${(props)=>props.theme.textColor2} !important;
        font-family: 'Lato', sans-serif;
    }
}
//HOME-COUNTRY COMPONENT
#carouselExampleAutoplaying{
    button,.card-title{
        background-color:rgba(0, 0, 0, 0.0) !important;
        color: ${(props)=>props.theme.textColor2} !important;
        font-family: 'Lato', sans-serif;
        font-weight: bolder;
        
    }
    .card-title{
        text-decoration: none;
        padding-bottom: .5rem;
        border-bottom: 2px solid  ${(props)=>props.theme.textColor2} !important;
        border-radius: 10px;
    }
    .card-country{
    background-image: linear-gradient(#30336b, #130f40, #17124e);
    img{
        height: 80%;
        width: auto;
        object-fit: cover;
        border-radius: 10px;
        opacity: 0.7;   
    }

}
}



//HOME-CATEGORY COMPONENT
.categories{
    .general-card{
            span{
                font-size:3rem !important;
            }
        } 
.card-categories{
    transition: transform .2s;
    position: relative;
    background-image: linear-gradient(#30336b, #130f40, #17124e);
    img{
        background-color: ${(props)=>props.theme.bgColor2} !important;
        opacity: 0.6;
    }
    &:hover{
    transform: scale(1.10);
    }
  
    }
    .homeCategoryCompLink{
        background-color:rgba(0, 0, 0, 0.0) !important;
        color: ${(props)=>props.theme.textColor2} !important;
        width: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-family: 'Lato', sans-serif;
        font-weight: bolder;
    }
}

//RESPONSIVE
@media (max-width:998px){
    .categories{
        .general-card{
            width: 65% !important;
        }
    }
}
@media (max-width:768px){
    .home-hero{
    h1{
       font-size: 1.7rem;
       padding-bottom: 1rem;
       border-bottom: 2px solid ${(props)=>props.theme.textColor2} !important;
    }
    p{
        font-size: 1 rem;
    }
    }
    //COUNTRY
    .card-country{
        width:100%;  

        .card-title{
            font-size: 1.1rem !important;
        }
    }
    //CATEGORY
    .categories{
        .homeCategoryCompLink{
            font-size:1rem !important;
        }
        .general-card{
            text-align: center !important;
            span{
                font-size: 1.5rem !important;
            }
        }
   
 
    }
}


`