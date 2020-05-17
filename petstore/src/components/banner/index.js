import React, { Component } from "react"

import Coelho from '../../img/banner1.jpg'
import Cao from '../../img/banner2.jpg'
import Calopsita from '../../img/banner3.jpg'

import Racoes from '../../img/racoes.jpg'
import Brinquedos from '../../img/brinquedos.jpg'
import Acessorios from '../../img/acessorios.jpg'


class Banner extends Component{
    render(){
        return(
            <div className='wd-100 banner'>
                <img className='img-banner responsive' src={Cao} />
                <div className='bg-orange wd-100 center'>
                    <div className='container card-categoria'>
                        <div className='col-4 card-cat'>
                            <img className='img-cat' src={Racoes} />
                            <p className='txt-cat txt-cat-center'>Rações</p>
                        </div>
                        <div className='col-4 card-cat'>
                            <img className='img-cat' src={Brinquedos} />
                            <p className='txt-cat txt-cat-center'>Brinquedos</p>
                        </div>
                        <div className='col-4 card-cat'>
                            <img className='img-cat' src={Acessorios} />
                            <p className='txt-cat txt-cat-center'>Acessórios</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Banner