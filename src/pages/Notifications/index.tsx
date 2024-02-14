import { Box, IconButton, Typography } from "@mui/material";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { Link } from "react-router-dom";

//images
import Avatar from '@mui/material/Avatar';
import Nawin from '../../img/321048287_1345101272900864_6610096451095455445_n.jpg'
import { deepOrange } from '@mui/material/colors';

//icons
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import useMainController from "./controllers";

const Notifications = () => {

    const controller = useMainController();

    
    return <Box sx={{ display: 'flex', minHeight: '100vh', height: '932px' }}>
        <Box sx={{ width: '100%', backgroundColor: '#white' }}>
            <Box sx={{ backgroundColor: 'white', height: '97px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingX: '20px', borderBottom: '1px solid #ddd' }}>
                <Typography variant="h6" sx={{ fontWeight: 550, margin: 'auto' }}>
                    Notifications
                </Typography>
                <Box>
                    <IconButton onClick={() => controller.handleButtonClick('/settingNotifications')}>
                        <SettingsOutlinedIcon />
                    </IconButton>

                </Box>
            </Box>

            <Box>
                <Link to="#" style={{ textDecoration: 'none', color: 'black' }}>
                    <Box sx={{ padding: '20px', backgroundColor: '#E8E8E8', margin: '0 0 2px', display: 'flex', columnGap: '10px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Avatar alt="Nawin" src={Nawin} />
                        </Box>

                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography sx={{ fontSize: '14px' }}>
                                Have a great day with my amazing..
                            </Typography>

                            <p style={{ fontSize: '14px', fontWeight: 700 }}>Hi there!</p>
                        </Box>

                        <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
                            <p style={{ fontSize: '14px', fontWeight: 500 }}>9.56 AM</p>
                            <Box sx={{ display: 'flex', justifyContent: 'right', padding: '5px' }}>
                                <FiberManualRecordIcon sx={{ fontSize: '13px', color: 'red' }} />
                            </Box>

                        </Box>
                    </Box>
                </Link>

                <Link to="#" style={{ textDecoration: 'none', color: 'black' }}>
                    <Box sx={{ padding: '20px', backgroundColor: '#E8E8E8', margin: '0 0 2px', display: 'flex', columnGap: '10px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Avatar>H</Avatar>
                        </Box>

                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography sx={{ fontSize: '14px' }}>
                                Have a great day with my amazing..
                            </Typography>

                            <p style={{ fontSize: '14px', fontWeight: 700 }}>Hi there!</p>
                        </Box>

                        <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
                            <p style={{ fontSize: '14px', fontWeight: 500 }}>9.56 AM</p>
                            <Box sx={{ display: 'flex', justifyContent: 'right', padding: '5px' }}>
                                <FiberManualRecordIcon sx={{ fontSize: '13px', color: 'red' }} />
                            </Box>

                        </Box>
                    </Box>
                </Link>

                <Link to="#" style={{ textDecoration: 'none', color: 'black' }}>
                    <Box sx={{ padding: '20px', backgroundColor: '#white', margin: '0 0 2px', display: 'flex', columnGap: '10px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
                        </Box>

                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography sx={{ fontSize: '14px' }}>
                                Have a great day with my amazing..
                            </Typography>

                            <p style={{ fontSize: '14px', fontWeight: 700 }}>Hi there!</p>
                        </Box>

                        <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
                            <p style={{ fontSize: '14px', fontWeight: 500 }}>9.56 AM</p>

                        </Box>
                    </Box>
                </Link>




            </Box>


        </Box>
    </Box>
}

export default Notifications;