import React, { Component } from "react"

class Produto extends Component{  
    render(){
        if(this.props.mob === true){
            return (
                <div className='col-s6 card block-desk'>
                    <img alt='Produto' src={this.props.img} className='responsive card-img'></img>
                    <p className='card-text'>Lorem Ipsum</p>
                    <p className='card-footer'>R$ 55,00</p>
                </div>
            )
        } else {
            return (
                <div className='col-3 card block-mob-flex'>
                    <img alt='Produto' src={this.props.img} className='responsive card-img'></img>
                    <p className='card-text'>Lorem Ipsum</p>
                    <p className='card-footer'>R$ 55,00</p>
                </div>
            )
        }
    }
}

export default Produto