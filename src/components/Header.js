import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <header className='main-header'>
                <h1 className='main-header__title'>
                    <Link className='navLink' to='/'>Andrew Zhang</Link>
                </h1>
                <nav className='nav'>
                    <ul className='nav__list'>
                        <li className='nav__list-item'>
                            <NavLink className='navLink' exact activeClassName='active' to='/'>
                                <strong>HOME</strong>
                            </NavLink>
                        </li>
                        <li className='nav__list-item'>
                            <NavLink className='navLink' exact activeClassName='active' to='/about'>
                                <strong>ABOUT</strong>
                            </NavLink>
                        </li>
                        <li className='nav__list-item'>
                            <NavLink className='navLink' exact activeClassName='active' to='/projects'>
                                <strong>PROJECTS</strong>
                            </NavLink>
                        </li>
                        <li className='nav__list-item'>
                            <NavLink className='navLink' exact activeClassName='active' to='/contact'>
                                <strong>CONTACT</strong>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}


export default Header