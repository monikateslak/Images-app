import React from 'react'
import { useState, useContext, useEffect } from 'react'
import logo from './logo.svg'
//import {ReactSVG} from 'react-svg'

const ImagesBox = () => {
  const [images, setImages] = useState (
    [
      {
        name: "szałwia",
        price: "5,00 zł",
        id: 1
      },
      {
        name: "melisa",
        price: "5,00 zł",
        id: 2
      },
      {
        name: "oregano",
        price: "5,00 zł",
        id: 3
    
      },

    ]
  )

  return (
    <div id="images-box">
      <img src={logo} width="100" height="100" alt="logo"></img>
      <main>
        {images.map(images => (
          <ul>
            <li>{images.name}</li>
          </ul>
        ))}
      </main>
    </div>
  )
}

export default ImagesBox
