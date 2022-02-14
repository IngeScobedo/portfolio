import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import 'flowbite'
import PortfolioRouter from './PortfolioRouter'

ReactDOM.render(
  <BrowserRouter>
    <PortfolioRouter />
  </BrowserRouter>,
  document.getElementById('root')
)
