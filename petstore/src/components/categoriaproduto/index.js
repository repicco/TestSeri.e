import React, { Component } from "react"

class CategoriaProduto extends Component{
    render(){
        if(this.props.mob === true){
            return (
                <div className='col-s12 card-cat'>
                    <img alt='Categoria Produto' className='img-cat' src={this.props.img} />
                    <p className={this.props.class}>{this.props.categoria}</p>
                </div>
            )
            } else {
            return (
                <div className='col-6 card-cat'>
                    <img alt='Categoria Produto' className='img-cat' src={this.props.img} />
                    <p className={this.props.class}>{this.props.categoria}</p>
                </div>
            )
        }
    }
}

export default CategoriaProduto