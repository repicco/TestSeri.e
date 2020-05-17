import React, { Component } from "react"

class Menu extends Component{
    render(){
        return(
            <nav className='bg-purple wd-100 center'>
                <ul className='container menu'>
                    <li className='col-3'>Home</li>
                    <li className='col-3'>Categoria</li>
                    <li className='col-3'>Sobre</li>
                    <li className='col-3'>Contato</li>
                </ul>
            </nav>
        )
    }
}

export default Menu