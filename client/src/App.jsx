import { Route, Routes } from 'react-router-dom'
import Home from './Views/Home'
import SelectCompany from './Views/SelectCompany'
import Company from './Views/Company'
import axios from 'axios'
// axios.defaults.baseURL = 'https://api-liventi-ox3e8xgj3-kevsalom.vercel.app'
axios.defaults.baseURL = "https://liventi-test-production.up.railway.app"


function App() {

  return (
    <div className='font-outfit overflow-x-hidden'>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/select' element={<SelectCompany/>} />
      <Route path='/selected/:id' element={<Company/>} />
     </Routes>
    </div>
  )
}

export default App
