import styled from "styled-components"


export const StyledNavbar=styled.nav`
 background-color: ${(props)=> props.theme.bgColor2} !important;
 color: ${(props)=>props.theme.textColor2} !important;

.navbar-brand{
 background-color: ${(props)=> props.theme.bgColor2} !important;
 color: ${(props)=>props.theme.textColor2} !important;
}
.navbar-toggler{
background-color:${(props)=> props.theme.textColor2} !important;
}
form{
    transition: width 1s;
    position: relative;
    input{
        border-radius: 25px;
        font-size: 1.2rem;
    }
    .searchBtn{
        border-radius: 25px;
        background-color: #fff !important;
        color:${(props)=>props.theme.bgColor} !important;
        position: absolute;
        border: 0px;
        right: 5px;
        font-size: 1.2rem;
    }
}
.smallForm{
    width: 55px;
    transition: width 1s;

}
.bigForm{
    width:300px;
}
@media (max-width:976px){
    .d-flex{
        margin-top: 1rem;
    }
    .themeComp{
        margin-top: 1rem !important;
        text-align: center;
    }
    form{
        width: 100%;
    }
    .bigForm{
    width:100%;
    }

    .alert{
        width: 33% !important;
        margin:  1rem auto !important;
        
    }
}

`