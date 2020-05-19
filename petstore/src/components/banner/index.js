import React, { Component } from "react"
import Slider from 'react-slick'
import './style.css'

import Coelho from '../../img/banner1.jpg'
import Cao from '../../img/banner2.jpg'
import Calopsita from '../../img/banner3.jpg'

import Racoes from '../../img/racoes.jpg'
import Brinquedos from '../../img/brinquedos.jpg'
import Acessorios from '../../img/acessorios.jpg'


class Banner extends Component{
    render(){
        const settings = {
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
            <div className='wd-100 banner'>
                <Slider {...settings} className='img-banner responsive'>
                    <div>
                        <img alt='Coelho' className='img-banner responsive' src={Coelho} />
                    </div>
                    <div>
                        <img alt='Cachorro' className='img-banner responsive' src={Cao} />
                    </div>
                    <div>
                        <img alt='Calopsita' className='img-banner responsive' src={Calopsita} />
                    </div>
                </Slider>
                
                <div id='banner-orange' className='bg-orange wd-100 center'>
                    <div className='container card-categoria block-mob-flex'>
                        <div className='col-4 col-s12 card-cat'>
                            <img alt='Categoria' className='img-cat' src={Racoes} />
                            <p className='txt-cat txt-cat-center'>Rações</p>
                        </div>
                        <div className='col-4 col-s12 card-cat'>
                            <img alt='Categoria' className='img-cat' src={Brinquedos} />
                            <p className='txt-cat txt-cat-center'>Brinquedos</p>
                        </div>
                        <div className='col-4 col-s12 card-cat'>
                            <img alt='Categoria' className='img-cat' src={Acessorios} />
                            <p className='txt-cat txt-cat-center'>Acessórios</p>
                        </div>
                    </div>
                    <Slider className='container card-categoria block-desk'>
                        <div className='col-4 col-s12 card-cat'>
                            <img alt='Categoria' className='img-cat' src={Racoes} />
                            <p className='txt-cat txt-cat-center'>Rações</p>
                        </div>
                        <div className='col-4 col-s12 card-cat'>
                            <img alt='Categoria' className='img-cat' src={Brinquedos} />
                            <p className='txt-cat txt-cat-center'>Brinquedos</p>
                        </div>
                        <div className='col-4 col-s12 card-cat'>
                            <img alt='Categoria' className='img-cat' src={Acessorios} />
                            <p className='txt-cat txt-cat-center'>Acessórios</p>
                        </div>
                    </Slider>
                </div>
            </div>
        )
    }
}

export default Banner