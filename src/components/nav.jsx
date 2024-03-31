// Nav
//import React from 'react'
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { NavLink } from "react-router-dom";
import { useState } from 'react';
import { navLinks } from '../Data';
export default function Nav() {
    const [openMenu, setOpenMenu] = useState(false);
    let MenuHandler = () => {
        setOpenMenu(!openMenu);
    }
  return (
    <nav>
        <ul className={`${openMenu ? 'navLinks navLinks-show' : 'navLinks'}`}>
            {
                navLinks.map(({id, name, path, icon}) => {
                    return(
                        <li key={id} className='nav-item'>
                            <NavLink to={path} className={({isActive}) => isActive ? 'nav-link navlinksActive' : 'nav-link'} onClick={MenuHandler}>
                                <span><FontAwesomeIcon icon={icon} /></span>
                                <h3>{name}</h3>
                            </NavLink>
                        </li>

                    )
                })
            }
        </ul>
        <div className={`${openMenu ? 'nav-toggle nav-close' : 'nav-toggle'}`}
        onClick={MenuHandler}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </nav>
  )
}
