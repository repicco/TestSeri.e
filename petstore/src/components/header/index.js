import React, { Component } from "react"

import Logo from '../../img/logo.png'

class Header extends Component{
    render(){
        return(
            <header className='container'>
                <div className='col-2'>
                    Pesquisar
                </div>
                <div className='col-4 off-2'>
                    <img className='img-logo responsive' src={Logo} />
                </div>
                <div className='col-1 off-3'>
                    Acesso
                </div>
            </header>
        )
    }
}

export default Header