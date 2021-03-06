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
                <div className='col-2 col-s2 center relative search block-mob-flex'>
                    <input type='text' placeholder='Search' className='search-input'></input>
                    <i className="fas fa-search"></i> 
                </div>
                <div className='col-4 off-2 col-s8 center'>
                    <img alt='Logo' className='img-logo responsive' src={Logo} />
                </div>
                <div id='logon' className='col-2 off-2 col-s4 center'>
                    <i className="fas fa-user"></i>
                    <i className="fas fa-shopping-cart"></i>
                </div>
                <div id={this.state.btnId} className='relative'>
                    <button className='btn-close' onClick={this.fechaBtn}><i className='btn-close-bar btn-bar fas fa-times'></i></button>
                    <a href='#header'><i className="fas fa-arrow-up"></i></a>
                    <a target='_blank' rel='noopener noreferrer' href='https://wa.me/5511988884444'><i className="fab fa-whatsapp"></i></a>
                 </div>
            </header>
        )
    }
}

export default Header