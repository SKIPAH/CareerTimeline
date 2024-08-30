import { useState } from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom';
import YoutubeEmbed from './components/YoutubeEmbed';
import './styles.css'


export default function App() {

  return (
    <>
      <NavBar>
      </NavBar>
      <div className='maincontainer'>
        <h1>LOL</h1>
        <YoutubeEmbed embedId="uY3LpNTSYqg"></YoutubeEmbed>
      </div>
      <Footer></Footer>
      </>
  );
}


