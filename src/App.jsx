
import './App.css'
import Navbar from './Shared/Navbar'
import { Outlet } from 'react-router-dom'
import Home from './Pages/Home'
import Footer from './Shared/Footer'

function App() {
  

  return (
    <div>
        
        <Navbar></Navbar>
        
        <Outlet></Outlet>
        <div className='mt-12'>
        <Footer></Footer>
        </div>
    
    </div>
    
  )
}

export default App
