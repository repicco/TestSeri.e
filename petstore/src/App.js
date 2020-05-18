import React, { Component } from 'react'
import './App.css'

import Header from './components/header'
import Menu from './components/menu'
import Banner from './components/banner'
import News from './components/news'
import Contato from './components/contato'
import Footer from './components/footer'

class App extends Component {
  render(){
    return(
      <div className='center'>
        <Header/>
        <Menu/>
        <Banner/>
        <News/>
        <Contato/>
        <Footer/>
      </div>
    )
  }
}

export default App