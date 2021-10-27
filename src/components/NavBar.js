import React from 'react'

function NavBar() {
    return (
        <div className="NavBar">
            <div className="NavBarList">
                <a className="NavBarListItem" href="#home">
                    HOME
                </a> 
                <a className="NavBarListItem" href="#about">
                    ABOUT
                </a>
                <a className="NavBarListItem" href="#portfolio">
                    PORTFOLIO
                </a>
                <a className="NavBarListItem" href="#contact">
                    CONTACT
                </a>
            </div>
        </div>
    )
}

export default NavBar
