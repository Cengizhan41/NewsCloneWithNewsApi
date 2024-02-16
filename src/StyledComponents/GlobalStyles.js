import { createGlobalStyle } from "styled-components";

//theme
export const GlobalStyles=createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Fira+Mono&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lustria&display=swap");
/* 
font-family: 'Lato', sans-serif;
font-family: 'Lustria', serif;
font-family:  'Fira Mono', monospace; 
*/

body{
background-color: ${(props)=> props.theme.bgColor} !important;
color: ${(props)=>props.theme.textColor} !important;

button{
background-color: ${(props)=> props.theme.btnBgColor} !important;
color: ${(props)=>props.theme.btnColor} !important;

&:hover{
background-color: ${(props)=> props.theme.btnColor} !important;
color: ${(props)=>props.theme.btnBgColor} !important; 
}
}

a{
background-color: ${(props)=> props.theme.bgColor} !important;
color: ${(props)=>props.theme.textColor} !important;

}

.card{
  background-color: ${(props)=> props.theme.bgColor2} !important;
  color: ${(props)=>props.theme.textColor2} !important;
}

}

`