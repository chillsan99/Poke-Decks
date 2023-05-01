import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
        <div className='info'>
            <span className='line-1'>
            PokeDecks by Chillsan99
            </span>

            <span className='line-2'>
            All data made available for the Pokemon TCG Api by Andrew Backes.
            This website is not produced, endorsed, supported, or affiliated with Nintendo or The Pokémon Company.
            </span>
        </div>
    </div>
  )
}

export default Footer