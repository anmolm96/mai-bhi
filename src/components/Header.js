import React from 'react'

import mainLogo from'../assets/images/metoo.png';

const Header = () => (
    <header id="header" className="alt">
        <span className="logo"><img height="100px" width= "100px" src={mainLogo} alt="" /></span>
        <h1>Mai Bhi</h1>
        <p>India's stand against misogyny.</p>
    </header>
)

export default Header
