import { Routes, Route  } from 'react-router-dom'

//Login
import LoginPage from '../pages/login/index'
import Create from '../pages/register/CreateAccount'
import Submit from '../pages/login/CreateSubmit'
import Otppage from '../pages/OTP/OTPpages'
//Home
import Home from '../pages/Home'
import SearchPage from '../pages/Home/components/SearchPage'
import Forgot from '../pages/Forgotpass/ForgotPassword'
import Available from '../components/Available'
import Filter from '../components/Filter'
//Favorite
import Favorite from '../pages/Favorite/Favorite'
//Notificatiobns
import Notifications from '../pages/Notifications'
//Profile
import Profile from '../pages/Profile'

import EditProfile from '../pages/Profile/EditProfile'
import Language from '../pages/Profile/Language'
import Privacy from '../pages/Profile/Privacy'
import Booking from '../pages/Booking'
import Terms from '../pages/Profile/Terms'
import SettingNoti from '../pages/Notifications/SettingNoti'
import HomeBooking from '../pages/Booking/HomeBooking'
import EditBooking from '../pages/Booking/EditBooking'
import BillBooking from '../pages/Booking/BillBooking'
// import useMainController from './controller'


const RoutesComponent = () => {

  // const controller = useMainController();

  return <Routes>
    <Route path='/' element={<LoginPage />} />
    <Route path='/register' element={<Create />} />
    <Route path='/forgotPassword' element={<Forgot />} />
    <Route path='/submit' element={<Submit />} />
    <Route path='/otpages' element={<Otppage />} />

    {/* Home */}
    <Route path='/home' element={<Home />} />
    <Route path='/search' element={<SearchPage />} />
    <Route path='/available' element={<Available />} />
    <Route path='/filter' element={<Filter />} />
    
    {/* Favorite */}
    <Route path='/favorites' element={<Favorite />} />

    {/* Notifications */}
    <Route path='/notifications' element={<Notifications />} />
    <Route path='/settingNotifications' element={<SettingNoti />} />

    {/* Profile */}
    <Route path='/profile' element={<Profile />} />
    <Route path='/edit-profile' element={<EditProfile />} />
    <Route path='/language' element={<Language />} />
    <Route path='/privacy-policy' element={<Privacy />} />
    <Route path='/terms-conditions' element={<Terms />} />

  {/* Bookings */}
    <Route path='/booking' element={<Booking />} />
    <Route path='/homebooking' element={<HomeBooking />} />
    <Route path='/editbooking' element={<EditBooking />} />
    <Route path='/billbooking' element={<BillBooking />} />

  </Routes>



}
export default RoutesComponent;