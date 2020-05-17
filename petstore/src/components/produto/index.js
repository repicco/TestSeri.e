import React, { Component } from "react"

class Produto extends Component{
    render(){
        return(
            <div className='col-3 card'>
                <img alt='Produto' src={this.props.img} className='responsive card-img'></img>
                <p className='card-text'>Lorem Ipsum</p>
                <p className='card-footer'>R$ 55,00</p>
            </div>
        )
    }
}

export default Produto