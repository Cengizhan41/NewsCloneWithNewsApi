import styled from "styled-components";


export const StyledSearchResults=styled.div`
.card{
    text-decoration: none;
    transition: transform .2s;
    height: 260px;
    .img-wrap{
        height: 260px;
        display: block;
        text-align: center;

        img{
            height: 100%;
            max-width: 100%;
            object-fit: cover;
        }
    }
    .card-body{
        height: 260px;
    .card-title{
    font-size: 1.7rem;
    }
    .card-description{
        font-size: 1.1rem;
    }
 
    }
    &:hover{
    transform: scale(1.02);
    }
    
}
@media (max-width:1200px){
.card{
    height: 33rem;
    .img-wrap{
        height: 10rem;
        display: block;
        text-align: center;
        img{
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }
    .card-body{
        height: 23rem;
    .card-title{
    font-size: 1.3rem;
    }
    .card-description{
        font-size: 0.8rem;
    }
    .cardtext2{
        margin-top: auto;
        h5{
            font-size: 1.1rem;
        }
        small{
            font-size: 0.8rem;
        }
    }
    }
    
}  
}
@media (max-width:992px){
.card{
    height: 32rem;
    .img-wrap{
        height: 12rem;
        display: block;
        text-align: center;
        img{
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }
    .card-body{
        height: 20rem;
    .card-title{
        font-size: 1.2rem;
    }
    .card-description{
        font-size: 0.8rem;
    }
    .cardtext2{
        margin-top: auto;
        h5{
            font-size: 1rem;
        }
        small{
            font-size: 0.7rem;
        }
    }
    }
    
}  
}
@media (max-width:768px){
.card{
    height: 32rem;
    .img-wrap{
        height: 12rem;
        display: block;
        text-align: center;
        img{
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }
    .card-body{
        height: 20rem;
    .card-title{
        font-size: 1rem;
    }
    .card-description{
        font-size: 0.7rem;
    }
    .cardtext2{
        margin-top: auto;
        h5{
            font-size: 0.9rem;
        }
        small{
            font-size: 0.6rem;
        }
    }
    }
    
}
}
@media (max-width:576px){
    .containerColumn{
        padding: 0.2rem;
    }
    .card{
    height: 33rem;
    .img-wrap{
        height: 8rem;
        display: block;
        text-align: center;
        img{
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }
    .card-body{
        padding: 0.7rem;
        height: 25rem;
    .card-title{
        font-size: 0.9rem;
    }
    .card-description{
        font-size: 0.8rem;
    }
    .cardtext2{
        margin-top: auto;
        h5{
            font-size: 0.6rem;
        }
        small{
            font-size: 0.6rem;
        }
    }
    }
    
}
}
`