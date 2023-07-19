import React from 'react'
import "../Styles/home.css"
import me from  "../Styles/watch.png"
const Home = () => {
  return (
    <>  
    <header>
        <nav> 
        <div class="logo">
      <a href="#home">
        {/* <img src={me}alt="Logo" /> */}
      </a>
      </div>
          <ul>
            
            <li><a href="#home">Home</a></li>
            <li><a href="#brands">Brands</a></li>
            <li><a href="#recentProducts">Recent Products</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </nav>
      </header>
    
    <section className="home" id="home">
  <div className="content">
  <div class="image">
        <img src={me} alt="" srcset="" />
       </div>
    <h1>Discover <br />  Most Suitable <br/>Watches</h1>
  
    <p>Find the best, reliable, and cheap smart watches here <br /> We focus on product quality. Here you can find smart <br />watches of almost all brands. So why you are waiting?<br /> Just order now!.</p>
    <div className='content2'>
    <i className='icons'></i>
  <span>find the best brands</span>
  <button className='btn'> Search</button>
  </div>
  </div>
  
</section>
</>

  )
}

export default Home
