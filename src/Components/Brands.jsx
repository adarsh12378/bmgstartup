import React from 'react'
import "../Styles/brands.css"
import img1 from '../Styles/apple.png'
import img2 from "../Styles/xiomi.png"
import img3 from "../Styles/fitbit.png"
const Brands = () => {
  return (
    <div class="brands-container">
    <div class="brand-card">
      <img src={img1} alt="Brand 1" />
      <div class="brand-card-content">
        <h1>Apple</h1>
        <span>Apple is one of the most famous smartwatches providing companies.</span>
      </div>
    </div>
    <div class="brand-card">
      <img src={img2} alt="Brand 2" />
      <div class="brand-card-content">
        <h1>Xiaomi</h1>
        <span>Xiaomi smartwatches are produced by MI company.</span>
      </div>
    </div>
    <div class="brand-card">
      <img src={img3} alt="Brand 3" />
      <div class="brand-card-content">
        <h1>FitBit</h1>
        <span>FitBit smartwatches are best for their health and fitness features.</span>
      </div>
    </div>
  </div>
  
  )
}

export default Brands

