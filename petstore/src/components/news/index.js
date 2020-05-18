import React, { Component } from "react"
import Slider from 'react-slick'
import './style.css'

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
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        }

        const settings2 = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            pauseOnHover: true
        }
        return(
            <div className='wd-100 center'>
                <h3 className='col-12 title'>NOVIDADES</h3>
                <Slider {...settings} className='container'>
                    <div className='carousel-prod'>
                        <Produto img={Prod7}/>
                        <Produto img={Prod8}/>
                        <Produto img={Prod5}/>
                        <Produto img={Prod6}/>
                    </div>
                    <div className='carousel-prod'>
                        <Produto img={Prod1}/>
                        <Produto img={Prod2}/>
                        <Produto img={Prod7}/>
                        <Produto img={Prod8}/>
                    </div>
                    <div className='carousel-prod'>
                        <Produto img={Prod3}/>
                        <Produto img={Prod4}/>
                        <Produto img={Prod5}/>
                        <Produto img={Prod6}/>
                    </div>
                </Slider>
                <div id='categoria' className='wd-100 center'>
                    <h3 className='col-12 title'>Categoria de Produtos</h3>
                    <Slider {...settings2} className='container wd-100'>
                        <div className='carousel-prod'>
                            <CategoriaProduto img={Cao} categoria='Cachorros' class='txt-cat txt-cat-left'/>
                            <CategoriaProduto img={Gato} categoria='Gatos' class='txt-cat txt-cat-right'/>
                        </div>
                        <div className='carousel-prod'>
                            <CategoriaProduto img={Exoticos} categoria='Exóticos' class='txt-cat txt-cat-left'/>
                            <CategoriaProduto img={Passaros} categoria='Passáros' class='txt-cat txt-cat-right'/>
                        </div>
                    </Slider>
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