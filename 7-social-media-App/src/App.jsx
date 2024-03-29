import { useState } from 'react'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/header';
import Footer from './components/footer';
import Sidebar from './components/sideBar';
import CreatePost from './components/createPost';
import Post from './components/post';
import PostList from './components/postList';
//10:28:57

function App() {

  const [selectedTab, setSelectedTab]=useState("Home");

  return (
    <>
    <div className="app">
    <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></Sidebar>

    <div className='content'>
    <Header></Header>
    {selectedTab === 'Home' && <PostList></PostList>}
    {selectedTab === 'Create' && <CreatePost></CreatePost>}
    <Footer></Footer>
    </div>
    </div>
    </>
  )
}

export default App;
