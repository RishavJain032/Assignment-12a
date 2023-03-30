import React from 'react';
// import logo from '../assets/Untitled.jpeg';
import image from '../Components/pause.png'
import image1 from '../Components/cartooon.jpeg'
import image2 from '../Components/music.jpeg'

const Main = () => {
  return (
    <div className='mainContainer'>
        <h1>MY <br />SOUNDS</h1>
        <img src = {image2} width = "200px" height= "300px"/>
        <div className='logo'>
        <h3>Click Here To Listen</h3>
        <img src ={image} width = "30px" height = "30px" className = 'pause' />
        </div>
        <div>
          <img src = {image1} width = "150px"height="200px" className='image1'/>
        </div>

    </div>
  )
}

export default Main