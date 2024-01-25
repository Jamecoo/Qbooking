
import LoginPage from '../pages/login/index'
import Create from '../pages/login/CreateAccount'
import Submit from '../pages/login/CreateSubmit'
import Otppage from '../pages/login/OTPpages'
import Home from '../pages/Home/Home'
import Forgot from '../pages/login/ForgotPassword'
import { Routes, Route } from 'react-router-dom'

const RoutesComponent=()=>{
    return <Routes>
    <Route path='/' element={<LoginPage />} />
    <Route path='/create' element={<Create />} />
    <Route path='/forgotPassword' element={<Forgot/>} />
    <Route path='/submit' element={<Submit />} />
    <Route path='/otpages' element={<Otppage />} />
    <Route path='/home' element={<Home />} />
  </Routes>
}
export default RoutesComponent;