import React from 'react'
import './Nav.css'
import pokeball from '../images/pokeball.png'

const Nav = () => {
    return (
        <nav>
            <div className='container'>
                <div className='option-wrapper'>
                    <a className='navbar-item' href="/">
                        <img className='poke-logo' src={pokeball} alt="logo"/>
                        <span className='text-logo'> Poke Decks </span>
                    </a>
                </div>
            </div>
        </nav>
    )
}


export default Nav