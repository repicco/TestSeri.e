import React, { Component } from "react"
import './style.css'

import Logo from '../../img/logo.png'

class Header extends Component{
    constructor(props){
        super(props)
        this.state ={
          btnId: 'btn-fixed'
        } 
        this.fechaBtn = this.fechaBtn.bind(this)
      }
    
      fechaBtn(){
        let state = this.state
        
        if(state.btnId === 'btn-fixed'){
          state.btnId = 'btn-fixed-close'
        }
    
        this.setState(state)
      }
    
    render(){
        return(
            <header id='header' className='container'>
                <div className='col-2 center relative search'>
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
                <div id={this.state.btnId} className='relative'>
                    <button className='btn-close' onClick={this.fechaBtn}><i className='btn-bar fas fa-times'></i></button>
                    <a href='#header'><i className="fas fa-arrow-up"></i></a>
                    <a target='_blank' rel='noopener noreferrer' href='https://wa.me/5511988884444'><i className="fab fa-whatsapp"></i></a>
                 </div>
            </header>
        )
    }
}

export default Header