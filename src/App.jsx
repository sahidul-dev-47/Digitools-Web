import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Component/Banner'
import Footer from './Component/Footer'
import Navbar from './Component/Navbar'
import Pricing from './Component/Pricing'
import Steps from './Component/Steps'
import Tools from './Component/Tools'
import Transform from './Transform'

const getTools = async () => {
  const res = await fetch("/Tools.json")
  return res.json()
}

const toolPromise = getTools()

function App() {
  const [activeTab, setActiveTab] = useState('tool');
  const [carts, setCarts] = useState([]);

  return (
    <div>
      <Navbar  cartCount={carts.length} />
      <Banner />

      <Suspense fallback={<div className='text-center py-20 text-2xl font-bold'>Loading Tools...</div>}>
        <Tools 
          toolPromise={toolPromise} 
          setActiveTab={setActiveTab} 
          activeTab={activeTab} 
          carts={carts} 
          setCarts={setCarts}
        />
      </Suspense>
       
      <Steps />
      <Pricing />
      <Transform />
      <Footer />
    </div>
  )
}

export default App