import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import { Box } from '@mui/material';


const BottomNav = () => {
    const [value, setValue] = React.useState('recents');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return <Box sx={{ display: 'flex', justifyContent: 'center'}}>
        <BottomNavigation value={value} onChange={handleChange}>
            <BottomNavigationAction
                label="Home"
                value="recents"
                icon={<HomeIcon />}
                href='/Home'
            />
            <BottomNavigationAction
                label="Favorites"
                value="favorites"
                icon={<FavoriteIcon />}
                href=''
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
        </BottomNavigation >
    </Box>

}

export default BottomNav;
