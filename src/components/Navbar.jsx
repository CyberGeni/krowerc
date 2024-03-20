import React, { useState } from 'react'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function Navbar() {
    const [active, setActive] = useState(false)

    return (
        <nav>
            <h1 className='logo'>Crework<span>•</span></h1>
            <div className={`nav-links ${active ? "active" : ""}`}>
                <a href="">30 Days of PM</a>
                <a href="">Newsletter</a>
                <a href="">Builders Cohort</a>
            </div>
            <div onClick={() => setActive(!active)} className='menu-icon'>
                {active ?
                    <XMarkIcon className='menu-icon' />
                    :
                    <Bars3Icon className="menu-icon" />
                }
            </div>

        </nav>
    )
}

export default Navbar