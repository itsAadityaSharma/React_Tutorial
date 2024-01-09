import { useState } from 'react'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/header';
import Footer from './components/footer';
import Sidebar from './components/sideBar';
//10:01:01
function App() {
  

  return (
    <>
    <div className="app">
    <Sidebar></Sidebar>

    <div className='content'>
    <Header></Header>
    <Footer></Footer>
    </div>
    </div>
    </>
  )
}

export default App;
