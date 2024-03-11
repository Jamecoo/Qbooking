import { TextField, Button, Typography, Box, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

import Room1 from '../assets/img/Room2.jpg'
import Room2 from '../assets/img/Room3.jpg'

//Icons
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import CircleIcon from '@mui/icons-material/Circle';

//Controller
import useMainController from './controllers';

const Available = () => {

    const controller = useMainController();


    return <Box sx={{ display: 'flex', minHeight: '100vh', justifyContent: 'center' }}>
        <Box sx={{ maxWidth: 400, padding: 3, width: '430px', backgroundColor: '#E8E8E8' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <TextField
                    sx={{ width: '100%' }}
                    type='text'
                    placeholder='Where are you going?...'
                    fullWidth
                    InputProps={{
                        style: {
                            borderRadius: '30px', backgroundColor: 'white'
                        },
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchOutlinedIcon />
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position="end">
                                <Button variant="contained" onClick={() => controller.handleButtonClick('/filter')} sx={{ backgroundColor: '#282828', color: 'white', borderRadius: '20px', fontSize: '12px', textTransform: 'none' }}>
                                    Filter
                                    <AccessTimeIcon sx={{ fontSize: 'medium' }} />
                                </Button>
                            </InputAdornment>
                        ),
                    }}
                />
            </Box>
            <Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px', gap: '30px', height: '40px', borderRadius: '20px', backgroundColor: 'white', alignItems: 'center' }}>
                    <Link
                        to="/home"
                        style={{
                            textDecoration: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            borderRadius: '20px',
                            width: '150px',
                            justifyContent: 'center',
                            color: controller.selectedLink === '/home' ? 'white' : 'black',
                            backgroundColor: controller.selectedLink === '/home' ? 'black' : 'white',
                        }}
                        onClick={() => controller.handleLinkClick('/home')}
                    >
                        All room
                    </Link>

                    <Link
                        to="/available"
                        style={{
                            textDecoration: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            borderRadius: '20px',
                            width: '150px',
                            justifyContent: 'center',
                            color: controller.selectedLink === '/available' ? 'white' : 'black',
                            backgroundColor: controller.selectedLink === '/available' ? 'black' : 'white',
                        }}
                        onClick={() => controller.handleLinkClick('/available')}
                    >
                        Available room
                    </Link>
                </Box>
            </Box>

            <Box sx={{ marginTop: '20px', position: 'relative' }}>
                <Box height={261} sx={{ position: 'relative' }}>
                    <img style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: '20px 20px 0 0' }} src={Room1} alt="" />
                    <IconButton onClick={() => controller.toggleLike('icon1')} sx={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        color: controller.Like.includes('icon1') ? 'red' : 'Like',
                        borderRadius: '50%',
                        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                    }}>
                        {controller.Like.includes('icon1') ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </IconButton>
                </Box>

                <Box sx={{ height: '100px', backgroundColor: 'white', borderRadius: '0 0 20px 20px', display: 'flex', flexDirection: 'column' }}>
                    <Grid container alignItems="center" sx={{ columnGap: '100px' }}>
                        <Typography sx={{ padding: '10px 20px', fontWeight: 600 }}>
                            iQURi Room
                        </Typography>
                        <p style={{ fontSize: '10px', color: 'green', padding: '13px' }}>
                            <CircleIcon sx={{ fontSize: '10px', verticalAlign: 'middle', marginRight: '10px' }} />
                            Available now
                        </p>
                        <p style={{ paddingLeft: '20px', fontSize: '10px' }}>
                            Meeting room 206
                        </p>
                        <p style={{ fontSize: '10px', marginLeft: '-90px' }}>
                            <CircleIcon sx={{ fontSize: '8px', verticalAlign: 'middle', marginRight: '5px' }} />

                            Floor 2
                        </p>
                        <p style={{ fontSize: '10px', fontStyle: 'normal', paddingLeft: '20px', marginTop: '2px', width: '250px' }}>This room is equipped with all the necessary equipment for lectures, meetings and negotiations.</p>

                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <p style={{ fontSize: '12px', marginLeft: '300px', marginTop: '-40px', display: 'flex', alignItems: 'center' }}><StarOutlineIcon sx={{ fontSize: '20px', verticalAlign: 'middle' }} /> 4.96</p>
                        </Box>
                    </Grid>
                </Box>
            </Box>

            <Box sx={{ marginTop: '20px', position: 'relative' }}>
                <Box height={261} sx={{ position: 'relative' }}>
                    <img style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: '20px 20px 0 0' }} src={Room2} alt="" />
                    <IconButton onClick={() => controller.toggleLike('icon2')} sx={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        color: controller.Like.includes('icon2') ? 'red' : 'gray',
                        borderRadius: '50%',
                        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                    }}>
                        {controller.Like.includes('icon2') ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </IconButton>
                </Box>

                <Box sx={{ height: '100px', backgroundColor: 'white', borderRadius: '0 0 20px 20px', display: 'flex', flexDirection: 'column' }}>
                    <Grid container alignItems="center" sx={{ columnGap: '100px' }}>
                        <Typography sx={{ padding: '10px 20px', fontWeight: 600 }}>
                            iQURi Room
                        </Typography>
                        <p style={{ fontSize: '10px', color: 'green', padding: '13px' }}>
                            <CircleIcon sx={{ fontSize: '10px', verticalAlign: 'middle', marginRight: '10px' }} />
                            Available now
                        </p>
                        <p style={{ paddingLeft: '20px', fontSize: '10px' }}>
                            Meeting room 204
                        </p>
                        <p style={{ fontSize: '10px', marginLeft: '-90px' }}>
                            <CircleIcon sx={{ fontSize: '8px', verticalAlign: 'middle', marginRight: '5px' }} />

                            Floor 2
                        </p>
                        <p style={{ fontSize: '10px', fontStyle: 'normal', paddingLeft: '20px', marginTop: '2px', width: '250px' }}>This room is equipped with all the necessary equipment for lectures, meetings and negotiations.</p>

                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <p style={{ fontSize: '12px', marginLeft: '300px', marginTop: '-40px', display: 'flex', alignItems: 'center' }}><StarOutlineIcon sx={{ fontSize: '20px', verticalAlign: 'middle' }} /> 4.96</p>
                        </Box>
                    </Grid>


                </Box>
            </Box>

        </Box>
    </Box >
}

export default Available;