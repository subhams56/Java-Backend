
import { Routes ,Route } from 'react-router-dom'
import './index.css'
import HomePage from './Pages/HomePage'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import Account from './Pages/Account'
import Employees from './Pages/Employees'
import Inwards from './Pages/Inwards'
import Outwards from './Pages/Outwards'
import Deliveries from './Pages/Deliveries'
import Godowns from './Pages/Godowns'

function App() {
 

  Routes
    return (
      <div>
        <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/account" element={<Account/>}/>
        <Route path="/employees" element={<Employees/>}/>
        <Route path="/godowns" element={<Godowns/>}/>
        <Route path="/inwards" element={<Inwards/>}/>
        <Route path="/outwards" element={<Outwards/>}/>
        <Route path="/deliveries" element={<Deliveries/>}/>
        
        </Routes>
      </div>
     
    )
  }


export default App
