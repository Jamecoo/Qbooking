import { Box, Button, Typography } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Link, } from "react-router-dom";
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

//Icons
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



//Controller
import useMainController from "./controllers";

const Profile = () => {

    const controller = useMainController();

    const buttons = [

        <Link to="/edit-profile" key="one">
            <Button sx={{ height: '70px', marginBottom: '5px', color: 'black', textTransform: 'none', justifyContent: 'flex-start', gap: '15px', fontSize: '18px' }}>
                <EditOutlinedIcon /> Edit Profile <ArrowForwardIosIcon sx={{ fontSize: 'medium', marginLeft: '180px' }} />
            </Button>
        </Link>,

        <Link to="/language" key="two">
            <Button sx={{ height: '70px', marginBottom: '5px', color: 'black', textTransform: 'none', justifyContent: 'flex-start', gap: '15px', fontSize: '18px' }}>
                <PublicOutlinedIcon /> Language <ArrowForwardIosIcon sx={{ fontSize: 'medium', marginLeft: '190px' }} />
            </Button>
        </Link>,

        <Link to="/privacy-policy" key="three">
            <Button sx={{ height: '70px', marginBottom: '5px', color: 'black', textTransform: 'none', justifyContent: 'flex-start', gap: '15px', fontSize: '18px' }}>
                <VerifiedUserOutlinedIcon /> Privacy Policy <ArrowForwardIosIcon sx={{ fontSize: 'medium', marginLeft: '155px' }} />
            </Button>
        </Link>,

        <Link to="/terms-conditions" key="four">
            <Button sx={{ height: '70px', marginBottom: '5px', color: 'black', textTransform: 'none', justifyContent: 'flex-start', gap: '15px', fontSize: '18px' }}>
                <AssignmentOutlinedIcon /> Terms & Conditions <ArrowForwardIosIcon sx={{ fontSize: 'medium', marginLeft: '107px' }} />
            </Button>
        </Link>,
    ];

    

    return <Box sx={{ height: '932px',display: 'flex', minHeight: '100vh', justifyContent: 'center' }}>
        <Box sx={{ width: '100%', backgroundColor: 'white' }}>
            <Box sx={{ height: '237px', backgroundColor: '#282828', borderRadius: '0 0 30px 30px' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', padding: '20px' }} >
                    <Typography variant="h6" sx={{ fontWeight: '550', color: 'white' }}>
                        Edit Profile
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'row', paddingLeft: '30px', paddingTop: '30px' }}>
                    <Avatar
                        alt="Remy Sharp"
                        src="https://scontent.fvte3-1.fna.fbcdn.net/v/t39.30808-6/340375027_552193037048423_558996166742457768_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeE7uAqMbcyCzBtuP98ODzaBtLqBn-_nkM60uoGf7-eQzhdpTe1WKL2h7UtO40xKKJOh_UXKq_MNKuefacSls7U9&_nc_ohc=6pLJMZpJ9pYAX9MUBaa&_nc_ht=scontent.fvte3-1.fna&oh=00_AfByfJh-2zYFabKGr9ypYgcoLyMMs2OHcmipeg0A-uoM7w&oe=65C03ADE"
                        sx={{ width: 96, height: 96 }}
                    />

                    <Box sx={{ top: '122px', paddingTop: '20px' }}>
                        <Typography variant="h6" sx={{ fontSize: '20px', marginBottom: '5px', color: 'white', paddingLeft: '20px' }}>Nilamit</Typography>
                        <Typography sx={{ paddingLeft: '20px' }} color={'white'} fontSize={'13px'}>Denniz5566@gmail.com</Typography>
                    </Box>
                </Box>

            </Box>

            <Box sx={{ margin: '10px' }}>
                <ButtonGroup
                    orientation="vertical"
                    aria-label="vertical contained button group"
                    variant="text"
                    fullWidth

                >
                    {buttons}

                </ButtonGroup>

            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '190px', padding: '30px' }}>
                <Button onClick={controller.handleOpen} fullWidth type='submit' variant="contained" sx={{ height: '59px', backgroundColor: '#282828', borderRadius: '10px', gap: '10px', textTransform: 'none', fontSize: '18px' }}>
                    <LogoutOutlinedIcon /> Logout
                </Button>

                <Dialog open={controller.open} onClose={controller.handleClose} sx={{ borderRadius: '20px'}}>
                    <DialogTitle sx={{ backgroundColor: '#282828', color: 'white'}}>Logout Confirmation</DialogTitle>
                    <DialogContent  sx={{ backgroundColor: '#f0f0f0', borderRadius: '0 0 10px 10px', marginTop: '10px'}}>
                        <p>Are you sure you want to logout?</p>
                    </DialogContent>
                    <DialogActions sx={{ backgroundColor: '#f0f0f0', borderRadius: '0 0 10px 10px' }}>
                        <Button onClick={controller.handleClose} sx={{ color: 'black' }}>Cancel</Button>
                        <Button onClick={controller.handleLogout} sx={{ color: 'white', backgroundColor: '#282828' }}>Logout</Button>
                    </DialogActions>
                </Dialog>

            </Box>




        </Box>
    </Box>
}

export default Profile;