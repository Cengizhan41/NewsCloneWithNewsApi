import styled from "styled-components";


export const StyledCountryCategoryNews=styled.div`
.card{
    overflow: hidden;
    transition: transform .2s;
    text-decoration: none;
    height: 17rem;
    .card-header{
            height:  4rem;
    }
    .card-body{
        .newsTitle{
            height: 8rem;
        }
        .blockquote-footer{
            height: 3rem;

        }
    } 
    &:hover{
    transform: scale(1.05);
    }
   
   
    .btn{
        background-color: ${(props)=> props.theme.btnBgColor} !important;
        color: ${(props)=>props.theme.btnColor} !important;
        &:hover{
        background-color: ${(props)=> props.theme.btnColor} !important;
        color: ${(props)=>props.theme.btnBgColor} !important; 
        }
    }
    .card-header{
        
        overflow: hidden !important;
    }
    .card-body{
        padding: 10px !important;
        .newsTitle{
            overflow: hidden !important;
        }
        .blockquote-footer{
            color: ${(props)=>props.theme.textColor} !important;
            opacity: 0.7;
        }
    }
}

@media (max-width:768px){
    .card{
        height: 15rem !important;
        .card-header{
            min-height: 3rem !important;
            h4{
                font-size: 0.85rem !important; 
            }
        }
        .card-body{
            padding: 0.5rem !important;
            .newsTitle{     
                height: 8rem !important;
                font-size: 0.7rem;
                margin-bottom: 0.5rem !important;
            }
            .blockquote-footer{ 
                height: 4rem !important; 
                font-size: 0.8rem !important;
                display: flex;
                flex-direction: column;
                &::before{
                   content: none;
                }
            }
            cite{
                font-size: 0.8rem !important;
            }
        }
    }
}
`