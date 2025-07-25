import './App.css'
import About from './components/About/About '
import Location from './components/Location/Location'
import Contact from './components/contact/Contact'
import Counter from './components/Counter/Counter'
import Navbar from './components/Navbar/Navbar'
import Project from './components/Project/Project'
import Login from './components/Login/Login'
import Product from './components/Product/Product'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'

function App() {
  const age = 17;
  function handleClick() {
    console.log("button is clicked")
  }
  return (
    <>
      <Navbar/>
      {/* <div className='container'>
      <h1>my protfolio</h1>
      <p>my name is Mingmar Lama.</p>
      <button
      id='btn'
      onClick={handleClick}>
        click me</button>
    </div> */}
      <Routes>
        <Route path='/contact' element={<Contact />} />
        <Route path='/' element={<Home />} />
        <Route path='/project' element={<Project />} />
        <Route path='/location' element={<Location />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/product' element={<Product />} />
      </Routes>
      {/* <Location/>
      <Contact/>
      <Counter/>
      <Project/> */}
    </>
  )
} 

export default App