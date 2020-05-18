import React, { Component } from "react"

class Produto extends Component{
    render(){
        this.props.mob ?

        return(
            <div className='col-3 card block-mob-flex'>
                <img alt='Produto' src={this.props.img} className='responsive card-img'></img>
                <p className='card-text'>Lorem Ipsum</p>
                <p className='card-footer'>R$ 55,00</p>
            </div>
        )
        :
        return(
            <div className='col-3 card block-mob-flex'>
                <img alt='Produto' src={this.props.img} className='responsive card-img'></img>
                <p className='card-text'>Lorem Ipsum</p>
                <p className='card-footer'>R$ 55,00</p>
            </div>
        )
    }
}

export default Produto