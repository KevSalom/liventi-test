import { Route, Routes } from 'react-router-dom'
import Home from './Views/Home'
import SelectCompany from './Views/SelectCompany'
import Company from './Views/Company'
import axios from 'axios'
// axios.defaults.baseURL = 'https://countriesdeploy-production.up.railway.app/'
axios.defaults.baseURL = 'http://localhost:3000'

function App() {

  return (
    <div className='font-outfit overflow-x-hidden'>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/select' element={<SelectCompany/>} />
      <Route path='/select/:name' element={<Company/>} />
     </Routes>
    </div>
  )
}

export default App
