import React, { Component } from "react"
import './style.css'

import Logo from '../../img/logo.png'

class Header extends Component{
    render(){
        return(
            <header id='header' className='container'>
                <div className='col-2 center relative'>
                    <input type='text' placeholder='Pesquisar...' className='search-input'></input>
                    <i className="fas fa-search"></i> 
                </div>
                <div className='col-4 off-2'>
                    <img alt='Logo' className='img-logo responsive' src={Logo} />
                </div>
                <div id='logon' className='col-1 off-3 center'>
                    <i className="fas fa-user"></i>
                    <i class="fas fa-shopping-cart"></i>
                </div>
            </header>
        )
    }
}

export default Header