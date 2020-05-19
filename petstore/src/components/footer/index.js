import React, { Component } from 'react'
import './style.css'

import Logo from '../../img/logo.png'
import Pagamentos from '../../img/pagamentos.jpg'

class Footer extends Component {
    render(){
        return(
            <div id='footer' className='wd-100 center'>
                <div className='container center flex-row footer-colluns'>
                    <div className='col-3 col-s12 flex-collum center footer-collum'>
                        <img alt='Logo' className='responsive footer-logo-img' src={Logo} ></img>
                        <div className='flex-row'>
                            <i className="fab fa-facebook-f center footer-icons"></i>
                            <i className="fab fa-instagram center footer-icons"></i>
                            <i className="fab fa-twitter center footer-icons"></i>
                        </div>
                        <p>&#169;2019 - 00.000.000/0000-00</p>
                        <p>Rua Tal, 123 - Cidade, Estado</p>
                    </div>
                    <div className='col-2 col-s12 off-1 flex-collum footer-collum center'>
                        <h4>Pet Store</h4>
                        <p>Quem Somos</p>
                        <p>Como Comprar</p>
                        <p>Trocas e Devoluções</p>
                        <p>Frete e Entregas</p>
                    </div>
                    <div className='col-2 col-s12 flex-collum footer-collum center'>
                        <h4>Contato</h4>
                        <p>(99) 9999-9999</p>
                        <p>(88) 8888-8888</p>
                        <p>petstore@petstore.com.br</p>
                    </div>
                    <div className='col-4 col-s12 center flex-collum footer-collum'>
                        <h4>Pagamentos</h4>
                        <img alt='Pagamentos' className='responsive footer-pag-img' src={Pagamentos}></img>
                    </div>
                </div>
                <div className='container center flex-row footer-reg'>
                    <h3>Tecnologia e Desenvolvimento</h3>
                    <h3><span>Renato Picco.&#0153;</span></h3> 
                </div>
            </div>
        )
    }
}

export default Footer