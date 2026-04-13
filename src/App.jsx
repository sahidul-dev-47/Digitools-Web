
import { Suspense } from 'react'
import './App.css'
import Banner from './Component/Banner'
import Footer from './Component/Footer'
import Navbar from './Component/Navbar'
import Pricing from './Component/Pricing'
import Steps from './Component/Steps'
import Tools from './Component/Tools'
import Transform from './Transform'


const getTools = async ()=>{
  const res = await fetch("/Tools.json")
  return res.json()
}

const toolPromise = getTools()

function App() {
  

  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>

       <Suspense fallback={<div>Loading...</div>}>
         <Tools toolPromise={toolPromise}></Tools>
       </Suspense>
       
      <Steps></Steps>
     
      <Pricing></Pricing>
      <Transform></Transform>
      <Footer></Footer>
      
      
     


    
    </div>
  )
}

export default App
