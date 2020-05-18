import React, { Component } from 'react'
import './App.css'

import Header from './components/header'
import Menu from './components/menu'
import Banner from './components/banner'
import News from './components/news'

class App extends Component {
  render(){
    return(
      <div className='center'>
        <Header/>
        <Menu/>
        <Banner/>
        <News/>
        <div className='container relative'>
          <a href='#header'><i class="fas fa-arrow-up"></i></a>
          <a target='_blank' rel='noopener noreferrer' href='https://wa.me/5511988884444'><i className="fab fa-whatsapp"></i></a>
        </div>
      </div>
    )
  }
}

export default App