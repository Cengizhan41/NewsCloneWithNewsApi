import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { SiteContextProvider } from './Context/SiteContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/js/src/collapse.js";
import "bootstrap/js/src/carousel.js";
import { ThemeProvider } from 'styled-components'
import { colors } from './StyledComponents/Colors.js'
import { GlobalStyles } from './StyledComponents/GlobalStyles.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SiteContextProvider>
    <BrowserRouter>
    <ThemeProvider theme={colors}>
      <GlobalStyles/>
    <App />
    </ThemeProvider>
    </BrowserRouter>
    </SiteContextProvider>
  </React.StrictMode>,
)
