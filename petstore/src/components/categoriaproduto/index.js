import React, { Component } from "react"

class CategoriaProduto extends Component{
    render(){
        return(
            <div className='col-6 card-cat'>
                <img alt='Categoria Produto' className='img-cat' src={this.props.img} />
                <p className={this.props.class}>{this.props.categoria}</p>
            </div>
        )
    }
}

export default CategoriaProduto