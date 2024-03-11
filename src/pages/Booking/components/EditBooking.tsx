import { Box, Grid, IconButton, TextField, Typography, Button, InputAdornment } from "@mui/material"
import Chip from '@mui/material/Chip';

//icons
import EventIcon from '@mui/icons-material/Event';
import CircleIcon from '@mui/icons-material/Circle';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

//images
import Room1 from '../../../assets/img/Room2.jpg'
import Room2 from '../../../assets/img/Room3.jpg'

//controller
import useMainController from '../controllers';
import Dot from './dot'

const EditBooking = () => {

    const controller = useMainController();

    const images = [Room1, Room2];

    return <Box sx={{ display: 'flex', minHeight: '100vh', justifyContent: 'center' }}>
        <Box sx={{ width: '100%', backgroundColor: '#E8E8E8' }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: '97px',
                    backgroundColor: 'white',
                    paddingX: '20px',
                    borderBottom: '1px solid #ddd',

                }}>

                <IconButton onClick={() => controller.handleButtonClick('/booking')}>
                    <ArrowBackIosIcon sx={{ fontSize: '20px', fontWeight: 700, color: 'black' }} />
                </IconButton>

                <Typography variant="h5" sx={{ fontWeight: 550 }}>
                    Booking
                </Typography>
            </Box>


            <Grid container alignItems="center" sx={{ columnGap: '150px' }}>
                <Typography variant='h6' sx={{ padding: '10px 20px', fontWeight: 600 }}>
                    iQURi Room
                </Typography>
                <p style={{ fontSize: '10px', color: 'green' }}>
                    <CircleIcon sx={{ fontSize: '12px', verticalAlign: 'middle', paddingRight: '5px' }} />
                    Booking...
                </p>
                <p style={{ paddingLeft: '20px', fontSize: '14px', fontWeight: 500 }}>
                    Meeting room 204
                </p>
                <p style={{ fontSize: '14px', marginLeft: '-140px', fontWeight: 500 }}>
                    <CircleIcon sx={{ fontSize: '8px', verticalAlign: 'middle', marginRight: '10px' }} />
                    Floor 2
                </p>

                <p style={{ fontSize: '12px', marginLeft: '320px', marginTop: '-20px' }}><StarOutlineIcon sx={{ fontSize: '15px', verticalAlign: 'middle' }} /> 4.96</p>
            </Grid>

            <Box sx={{ marginTop: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box sx={{ position: 'relative', marginBottom: '10px', textAlign: 'center' }}>
                    <img src={images[controller.currentImageIndex]} style={{ borderRadius: '20px' }} width={350} height={231} alt="" />
                    <Box sx={{ bottom: '0', left: '0', width: '100%', display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                        {images.map((_, index) => (
                            <Dot key={index} active={index === controller.currentImageIndex} />
                        ))}
                    </Box>
                    <IconButton onClick={controller.handlePrevClick} sx={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)' }}>
                        <NavigateBeforeIcon />
                    </IconButton>
                    <IconButton onClick={controller.handleNextClick} sx={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)' }}>
                        <NavigateNextIcon />
                    </IconButton>
                </Box>
            </Box>


            <Box>
                <Typography sx={{ fontSize: '20px', fontWeight: 700, marginTop: '30px', paddingLeft: '20PX' }}>
                    When’s your meet?
                </Typography>
            </Box>

            <Box sx={{ paddingX: '20px', marginTop: '20px' }}>
                <TextField type='date' variant='standard' value={controller.selectedDate.toISOString().split('T')[0]}
                    onChange={controller.handleChange}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <EventIcon />
                            </InputAdornment>
                        )
                    }}
                />
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(7, 1fr)',
                        gap: '10px',
                        marginTop: '20px',



                    }}
                >
                    {controller.calculateDaysOfWeek().map(({ day, date }, index) => (
                        <Box key={index} sx={index === 3 ? { backgroundColor: 'white', borderRadius: '10px' } : {}}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', fontWeight: '700' }}>{day}</Box>
                            <span style={{ display: 'flex', justifyContent: 'center' }}>{date}</span>

                        </Box>
                    ))}
                </Box>
            </Box>

            <Box sx={{ paddingTop: '20px', paddingLeft: '20px' }}>
                <Typography variant='h6' fontWeight={600} >
                    <AccessTimeOutlinedIcon sx={{ verticalAlign: 'middle', paddingRight: '5px' }} />Time
                </Typography>
            </Box>

            <Box sx={{ marginTop: '20px', paddingX: '10px' }}>
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(6, 60px)', columnGap: '5px', fontSize: '12px', fontWeight: 500 }}>
                    <Button style={{ textAlign: 'center', borderRadius: '10px', color: 'black' }}>9:00</Button>
                    <Button style={{ textAlign: 'center', borderRadius: '10px', color: 'black' }}>10:00</Button>
                    <Button style={{ textAlign: 'center', borderRadius: '10px', color: 'black' }}>11:00</Button>
                    <Button style={{ textAlign: 'center', borderRadius: '10px', color: 'black' }}>12:00</Button>
                    <Button style={{ textAlign: 'center', borderRadius: '10px', color: 'black' }}>13:00</Button>
                    <Button style={{ textAlign: 'center', borderRadius: '10px', color: 'black' }}>14:00</Button>
                </Box>
            </Box>

            <Box sx={{ marginTop: '40px', display: 'grid', paddingX: '20px', gridTemplateColumns: '1fr 1fr', columnGap: '10px', justifyContent: 'center' }}>

                <TextField label="Start time" type='time' fullWidth
                    InputProps={{
                        style: { borderRadius: '10px', height: '40px', backgroundColor: 'white' },

                    }}
                    defaultValue="12:00"
                />

                <TextField label="End time" type='time' fullWidth
                    InputProps={{
                        style: { borderRadius: '10px', height: '40px', backgroundColor: 'white' },

                    }}
                    defaultValue="12:00"
                />

            </Box>

            <Box sx={{ paddingX: '20px', marginTop: '30px' }}>
                <Typography fontWeight={700}>
                    EQUIPMENT:
                </Typography>

                <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', marginTop: '20px', gap: '8px' }}>
                    <Chip sx={{ backgroundColor: 'white' }} onClick={controller.handleClick} label="Microphone" variant="outlined" />
                    <Chip sx={{ backgroundColor: 'white' }} onClick={controller.handleClick} label="Tv" variant="outlined" />
                    <Chip sx={{ backgroundColor: 'white' }} onClick={controller.handleClick} label="Board" variant="outlined" />
                    <Chip sx={{ backgroundColor: 'white' }} onClick={controller.handleClick} label="Plasma display" variant="outlined" />
                    <Chip sx={{ backgroundColor: 'white' }} onClick={controller.handleClick} label="Wifi" variant="outlined" />
                    <Chip sx={{ backgroundColor: 'white' }} onClick={controller.handleClick} label="Capacity 15" variant="outlined" />

                </Box>
            </Box>

            <Box sx={{ marginTop: '30px', paddingX: '20px' }}>
                <Typography fontWeight={700}>
                    DETAILS:
                </Typography>

                <Box sx={{ marginTop: '10px' }}>
                    <p style={{ fontSize: '14px' }}>This room is equipped with all the necessary
                        equipment for lectures, meetings and negotiations.</p>
                </Box>
            </Box>

            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', marginY: '50px', paddingX: '20px', columnGap: '20px' }}>

                <Button type='submit' variant="contained" sx={{ height: '59px', backgroundColor: 'white', borderRadius: '10px', textTransform: 'none', color: 'black' }}>
                    Edit booking
                </Button>

                <Button type='submit' variant="contained" sx={{ height: '59px', backgroundColor: '#282828', borderRadius: '10px', textTransform: 'none' }}>
                    Cancel booking
                </Button>


            </Box>



        </Box>
    </Box>


}


export default EditBooking;