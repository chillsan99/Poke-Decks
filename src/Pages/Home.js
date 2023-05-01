import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import './Home.css'
import RandomFour from '../components/RandomFour'

const Home = () => {
  return (
    <>
    <div className='container'>
      <div className='nav-bar'>
          <Nav/>
      </div>

      <div className='search-container'>     
        <div className='search-input'>
          <div className='text-titles'>
            <span className='brand-title'> Poke Decks</span>
            <span className='brand-subtitle'>Grow your collection, and catch them all</span>  
          </div>
          <form>
            <input type="text" name = "search" id="search" />
          </form>
        </div>
      </div>
   
    
      <div className='four-container'>
        <span className='four-text'>
          Here are a few cards to get you started.  
        </span>
        <RandomFour/>
      </div>
    
      <div className='footer-container'>
        <Footer/>
      </div>
    </div>
    </>
  )
}

export default Home