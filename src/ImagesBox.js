import React from 'react'
import { useState, useEffect } from 'react'
import logo from './logo.svg'
import {ReactSVG} from 'react-svg'

const ImagesBox = () => {
  return (
    <div id="images-box">
      <img src={logo} width="100" height="100" alt="logo"></img>
    </div>
  )
}

export default ImagesBox
