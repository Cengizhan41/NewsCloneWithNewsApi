import styled from "styled-components";


export const StyledCategoryList=styled.ul`
width: 100%;
flex-wrap: wrap;
font-family: 'Lato', sans-serif;
 background-color: ${(props)=> props.theme.bgColor2} !important;
 color: ${(props)=>props.theme.textColor2} !important;
 border-radius: 0px;
 border-top: 2px solid ${(props)=>props.theme.textColor2} !important;
 .list-group-item{
 height: 2.5rem !important;
 text-align: center;
 border: none;
 background-color: ${(props)=> props.theme.bgColor2} !important;
 color: ${(props)=>props.theme.textColor2} !important;
}
.nav-link{
 background-color: ${(props)=> props.theme.bgColor2} !important;
 color: ${(props)=>props.theme.textColor2} !important;
 transition: transform .2s;
}

.nav-link:hover{
 text-shadow: 1px 1px; 
}
.nav-link.active{
    transform: scale(1.4);
}

@media (max-width:768px){
    .list-group-item{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    li{
        width: 25%;
        border-bottom: 2px solid ${(props)=>props.theme.textColor2} !important ;
        border-radius: 15px;
        font-size: 0.9rem !important;
    }
    .nav-link.active{
    transform: scale(1.2);
}
}

`