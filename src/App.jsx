import './App.css'
import { useState,useEffect } from 'react';
import Background from './components/Background/Background';
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
function App() {
  let heroData = [
    {
      text1 : "Dive into",
      text2 : "what you love"
    },
    {
      text1 : "Indulge",
      text2 : "your passions"
    },
    {
      text1 : "Give into",
      text2 : "your passions"
    }
  ]

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setHeroCount((count)=>{
        return count===2?0:count+1
      });
    }, 3000);
  }, [])
  

  return (
    <>
    <Navbar></Navbar>
    <Hero setPlayStatus={setPlayStatus} heroData={heroData[heroCount]} heroCount={heroCount} setHeroCount={setHeroCount} playStatus={playStatus}></Hero>
    <Background playStatus={playStatus} heroCount = {heroCount}></Background>
    </>
  )
}

export default App
