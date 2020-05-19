import React, { Component } from 'react'
import './style.css'

import Emblema from '../../img/emblema.png'


class Contato extends Component {
    render(){
        return(
            <div id='contato' className='wd-100 center'>
                <div className='bg-purple wd-100 center'>
                    <div className='container center flex-row contato-emblema'>
                        <div className='col-4 col-s12 flex-collum emblema center'>
                            <div className='center'>
                                <img alt='Emblema' src={Emblema} className='img-emblema responsive'></img>
                            </div>
                            <p>Entrega Gratuita a Partir de R$ 99</p>                        </div>
                        <div className='col-4 col-s12 flex-collum emblema center'>
                            <div className='center'>
                                <img alt='Emblema' src={Emblema} className='img-emblema responsive'></img>
                            </div>
                            <p>Parcelamento sem Juros!</p>
                        </div>
                        <div className='col-4 col-s12 flex-collum emblema center'>
                            <div className='center'>
                                <img alt='Emblema' src={Emblema} className='img-emblema responsive'></img>
                            </div>
                            <p>Cadastre-se e Ganhe Desconto!</p>
                        </div>
                    </div>
                    <div className='container center flex-collum contato-news'>
                        <h3>ASSINE NOSSA NEWSLETTER</h3>
                        <p>Cadastre-se para receber nossas novidades e descontos exclusivos!</p>
                    </div>
                    <div className='container center flex-row contato-form'>
                        <input type='text' name='nome' placeholder='Nome' className='col-3 col-s12 form' />
                        <input type='email' name='email' placeholder='E-mail' className='col-4 col-s12 form' />
                        <button className='form-btn col-2 col-s12'>Enviar</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contato