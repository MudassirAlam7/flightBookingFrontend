import React from 'react'
import Navbar from './components/navbar/Navbar'

import "./App.css"
import Home from './components/home/Home'
import Search from './components/search/Search'
import Support from './components/support/Support'
import Info from './components/info/Info'
import Traveller from './components/traveller/Traveller'
import Footer from './components/footer/footer'

const App = () => {
  return (
    <div>
     <Navbar/>
     <Home/>
     <Search/>
     <Support/>
     <Info/>
     <Traveller/>
     <Footer/>
    </div>
  )
}

export default App
