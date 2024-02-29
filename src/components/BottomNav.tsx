import { Box } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

//Icons
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

//Controller
import useMainController from './controllers';


const BottomNav = () => {

    const controller = useMainController();

    
    return controller.shouldShowBottomNav && (
        <Box sx={{ display: 'flex', justifyContent: 'center',}}>
            <BottomNavigation showLabels value={controller.value} onChange={controller.handleChange}>
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
