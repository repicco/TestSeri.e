import React, { Component } from "react"

import Produto from '../produto'
import CategoriaProduto from '../categoriaproduto'

import Prod1 from '../../img/prod1.jpg'
import Prod2 from '../../img/prod2.jpg'
import Prod3 from '../../img/prod3.jpg'
import Prod4 from '../../img/prod4.jpg'
import Prod5 from '../../img/prod5.jpg'
import Prod6 from '../../img/prod6.jpg'
import Prod7 from '../../img/prod7.jpg'
import Prod8 from '../../img/prod8.jpg'

import Cao from '../../img/cao.jpg'
import Gato from '../../img/gato.jpg'
import Exoticos from '../../img/exotico.jpg'
import Passaros from '../../img/passaros.jpg'

class News extends Component{
    render(){
        return(
            <div className='wd-100 center'>
                <h3 className='col-12 title'>NOVIDADES</h3>
                <div id='novidades1' className='container'>
                    <Produto img={Prod1}/>
                    <Produto img={Prod2}/>
                    <Produto img={Prod7}/>
                    <Produto img={Prod8}/>
                </div>
                <h3 className='col-12 title'>Categoria Produtos</h3>
                <div className='wd-100 center'>
                    <div className='container card-categoria'>
                        <CategoriaProduto img={Cao} categoria='Cachorros' class='txt-cat txt-cat-left'/>
                        <CategoriaProduto img={Gato} categoria='Gatos' class='txt-cat txt-cat-right'/>
                    </div>
                </div>
                <h3 className='col-12 title'>Produtos</h3>
                <div id='novidades1' className='container'>
                    <Produto img={Prod1}/>
                    <Produto img={Prod2}/>
                    <Produto img={Prod3}/>
                    <Produto img={Prod4}/>
                    <Produto img={Prod5}/>
                    <Produto img={Prod6}/>
                    <Produto img={Prod7}/>
                    <Produto img={Prod8}/>
                </div>
                <h3 className='txt-prod'>Todos os Produtos</h3>
            </div>
        )
    }
}

export default News