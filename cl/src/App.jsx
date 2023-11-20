
import { Routes ,Route } from 'react-router-dom'
import './index.css'
import HomePage from './Pages/HomePage'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import Account from './Pages/Account'

function App() {
 

  Routes
    return (
      <div>
        <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/account" element={<Account/>}/>
        </Routes>
      </div>
     
    )
  }


export default App
