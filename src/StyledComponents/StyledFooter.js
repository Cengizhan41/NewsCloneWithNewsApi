import styled from "styled-components";


export const StyledFooter=styled.footer`
background-color: ${(props)=> props.theme.bgColor2} !important;
color: ${(props)=>props.theme.textColor2} !important;

span{
    background-color: ${(props)=> props.theme.bgColor2} !important;
    color: ${(props)=>props.theme.textColor2} !important;
}
a{
    background-color: ${(props)=> props.theme.bgColor2} !important;
    color: ${(props)=>props.theme.textColor2} !important;
}

@media (max-width:768px){
span{
    font-size:1rem !important;
}
a{
    font-size:1.3rem !important;  
}
 
}
`