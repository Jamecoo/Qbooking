import * as React from 'react';
import { Box } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

//Icons
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';



const BottomNav = () => {

    

    const [value, setValue] = React.useState('Home');
    const navigate = useNavigate(); // Initialize useNavigate
    const location = useLocation();

    //functions

    

    const shouldShowBottomNav = !(location.pathname === "/" || location.pathname === "/register" 
    || location.pathname === "/forgotPassword" || location.pathname === "/submit" || location.pathname === "/otpages");


    const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);

        // Use navigate to redirect to the desired path
        if (newValue === 'home') {
            navigate('/home');
        } else if (newValue === 'favorites') {
            navigate('/favorites');
        } else if (newValue === 'booking') {
            navigate('/booking');
        } else if (newValue === 'notifications') {
            navigate('/notifications');
        } else if (newValue === 'profile') {
            navigate('/profile');
        }
    };

    return shouldShowBottomNav && (
        <Box sx={{ display: 'flex', justifyContent: 'center',}}>
            <BottomNavigation showLabels value={value} onChange={handleChange}>
                <BottomNavigationAction
                    label="Home"
                    value="home"
                    icon={<HomeOutlinedIcon />}
                />
                <BottomNavigationAction
                    label="Favorites"
                    value="favorites"
                    icon={<FavoriteBorderOutlinedIcon />}
                />
                <BottomNavigationAction
                    label="Bookings"
                    value="booking"
                    icon={<BookmarkBorderOutlinedIcon />}
                />
                <BottomNavigationAction
                    label="Notifications"
                    value="notifications"
                    icon={<NotificationsNoneOutlinedIcon />}
                />
                <BottomNavigationAction
                    label="Profile"
                    value="profile"
                    icon={<PersonOutlineOutlinedIcon />}
                />
            </BottomNavigation>
        </Box>
    );
};

export default BottomNav;
