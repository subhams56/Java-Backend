
import { Routes ,Route } from 'react-router-dom'
import './index.css'
import HomePage from './Pages/HomePage'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'

import Inwards from './Pages/Inwards'
import Outwards from './Pages/Outwards'
import Deliveries from './Pages/Deliveries'
import Godowns from './Pages/Godowns'
import AdminAccount from './Pages/AdminAccount'
import UserAccount from './Pages/UserAccount'
import Emp from './Pages/Emp'
import AddEmp from './Pages/AddEmp'


import AddGodown from './Pages/AddGodown'
import UpdateGodown from './Pages/UpdateGodown'
import AddInward from './Pages/AddInward'
import UpdateEmployee from './Pages/updateEmployee'


function App() {
 

  Routes
    return (
      <div>
        <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/adminAccount" element={<AdminAccount/>}/>
        <Route path="/userAccount" element={<UserAccount/>}/>
        <Route path="/employees" element={<Emp/>}/>
        <Route path="/addEmployee" element={<AddEmp/>}/>
        {/* <Route path="/updateEmployee/:userId" element={<UpdateEmployee />} /> */}
        <Route path="/updateEmployee/:userId" element={<UpdateEmployee/>}/>
        <Route path="/updateGodown/:id" element={<UpdateGodown />} />
        <Route path="/godowns" element={<Godowns/>}/>
        <Route path="/addGodown" element={<AddGodown/>}/>
        <Route path="/inwards" element={<Inwards/>}/>
        <Route path="/addInward" element={<AddInward/>}/>
        <Route path="/outwards" element={<Outwards/>}/>
        <Route path="/deliveries" element={<Deliveries/>}/>
        
        </Routes>
      </div>
     
    )
  }


export default App
