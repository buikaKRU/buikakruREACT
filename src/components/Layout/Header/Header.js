import React from 'react'


import NavItem from './NavItem/NavItem'

const header = (props) => {
    return(
        <header>
            <nav>
                <NavItem item={'contact'}/>
                <NavItem item={'projects'}/>
            </nav>
        </header>
        
    )
}

export default header
