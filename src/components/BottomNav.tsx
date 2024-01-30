import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import { Box } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate

const BottomNav = () => {
    const [value, setValue] = React.useState('Home');
    const navigate = useNavigate(); // Initialize useNavigate
    const location = useLocation();

    const shouldShowBottomNav = !(location.pathname === "/" || location.pathname === "/create" 
    || location.pathname === "/forgotPassword" || location.pathname === "/submit" || location.pathname === "/otpages" );


    const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);

        // Use navigate to redirect to the desired path
        if (newValue === 'Home') {
            navigate('/Home');
        } else if (newValue === 'favorites') {
            navigate('/Favorites');
        } else if (newValue === 'Bookings') {
            navigate('/Bookings');
        } else if (newValue === 'Notifications') {
            navigate('/Notifications');
        } else if (newValue === 'Profile') {
            navigate('/Profile');
        }
    };

    return shouldShowBottomNav && (
        <Box sx={{ display: 'flex', justifyContent: 'center',}}>
            <BottomNavigation showLabels value={value} onChange={handleChange}>
                <BottomNavigationAction
                    label="Home"
                    value="Home"
                    icon={<HomeIcon />}
                />
                <BottomNavigationAction
                    label="Favorites"
                    value="favorites"
                    icon={<FavoriteIcon />}
                />
                <BottomNavigationAction
                    label="Bookings"
                    value="Bookings"
                    icon={<BookmarkIcon />}
                />
                <BottomNavigationAction
                    label="Notifications"
                    value="Notifications"
                    icon={<NotificationsIcon />}
                />
                <BottomNavigationAction
                    label="Profile"
                    value="Profile"
                    icon={<PersonIcon />}
                />
            </BottomNavigation>
        </Box>
    );
};

export default BottomNav;
