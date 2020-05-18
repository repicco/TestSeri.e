import React, { Component } from "react"
import './style.css'



class Menu extends Component{
    constructor(props){
        super(props)
        this.state = {
            btnstate: 'menu_hide',
            btnimage: 'btn-bar fas fa-bars'
        }
        this.alterabotao = this.alterabotao.bind(this)
    }

    alterabotao(){
        let state = this.state

        if(state.btnstate === 'menu_hide') {
            state.btnstate = 'menu_show'
            state.btnimage = 'btn-bar fas fa-times'
        } else {
            state.btnstate = 'menu_hide'
            state.btnimage = 'btn-bar fas fa-bars'
        }

        this.setState(state)
    }

    render(){
        return(
            <nav id='menu' className='bg-purple wd-100 center'>
                    <div className='container center wd-100'>
                        <button onClick={this.alterabotao} id='btn_menu'><i className={this.state.btnimage}></i></button>
                    </div>
                    <ul id={this.state.btnstate} className='container menu wd-100 center' >
                        <li className='col-3'>Home</li>
                        <li className='col-3'>Categoria
                            <ul>
                                <li>Cachorros</li>
                                <li>Gatos</li>
                                <li>Exóticos
                                    <ul>
                                        <li>Coelhos</li>
                                        <li>Iguanas</li>
                                        <li>Tartarugas</li>
                                    </ul>
                                </li>
                            
                                <li>Passáros
                                    <ul>
                                        <li>Calopsitas</li>
                                        <li>Papagaios</li>
                                        <li>Periquitos</li>
                                    </ul>
                                </li>
                                
                            </ul>
                        </li>
                        <li className='col-3'>Sobre</li>
                        <li className='col-3'>Contato</li>
                    </ul>
            </nav>
        )
    }
}

export default Menu