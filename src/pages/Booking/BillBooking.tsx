import { Box, IconButton, Typography, Button } from "@mui/material"
import Barcode from 'react-barcode';
//icons
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import MeetingRoomOutlinedIcon from '@mui/icons-material/MeetingRoomOutlined';
import TodayOutlinedIcon from '@mui/icons-material/TodayOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';

//avatar
import Nawin from '../../img/321048287_1345101272900864_6610096451095455445_n.jpg'
import Avatar from '@mui/material/Avatar';

import useMainController from "./controllers";


const BillBooking = () => {

    const controller = useMainController();


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

            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '20px', position: 'relative' }}>
                <Avatar alt="Nawin" src={Nawin}
                    sx={{ width: 72, height: 72, border: '15px solid #E8E8E8', top: '35px' }} />

                <Box sx={{
                    backgroundColor: '#282828', width: '342px', height: '513px', borderRadius: '5px', overflow: 'hidden'
                }}>


                    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
                        <Typography sx={{ color: 'white', fontSize: '16px', fontWeight: '600' }}>
                            Nawin Xayyalath
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'row', gap: '15px', padding: '20px', marginTop: '30px' }}>
                        <MeetingRoomOutlinedIcon sx={{ color: 'white' }} />
                        <Typography sx={{ color: 'white', fontSize: '14px' }}>
                            iQURi Room
                        </Typography>


                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <hr style={{ width: '294px' }} />
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'row', gap: '15px', padding: '20px' }}>
                        <TodayOutlinedIcon sx={{ color: 'white' }} />
                        <Typography sx={{ color: 'white', fontSize: '14px' }}>
                            Schedeule
                        </Typography>

                        <Box sx={{ marginLeft: '145px' }}>
                            <p style={{ color: 'white', fontSize: '14px', fontWeight: 700 }}>Now</p>
                        </Box>

                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'row', gap: '15px', padding: '5px 10px 5px 20px' }}>
                        <AccessTimeOutlinedIcon sx={{ color: 'white' }} />
                        <Typography sx={{ color: 'white', fontSize: '14px' }}>
                            Hours
                        </Typography>

                        <Box sx={{ marginLeft: '175px' }}>
                            <p style={{ color: 'white', fontSize: '14px', fontWeight: 700 }}>Now</p>
                        </Box>

                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                        <hr style={{ width: '294px' }} />
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'row', gap: '15px', padding: '5px 10px 5px 20px', marginTop: '15px' }}>
                        <SmsOutlinedIcon sx={{ color: 'white' }} />
                        <Typography sx={{ color: 'white', fontSize: '14px' }}>
                            Note
                        </Typography>

                        <Box sx={{ marginLeft: '45px' }}>
                            <p style={{ color: 'white', fontSize: '14px', fontWeight: 700 }}>Thanks for your Booking</p>
                        </Box>
                    </Box>

                    {/* Barcode */}

                    <Box sx={{ paddingX: '20px', marginTop: '50px' }}>
                        <Barcode textAlign="center" fontSize={16} width={1.3} height={68} background="#282828" lineColor="#FEFEFE" value="MYUI7821A-G2-90A" />
                    </Box>



                </Box>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
                <Button fullWidth type='submit' variant="contained" sx={{ height: '59px', backgroundColor: '#282828', borderRadius: '10px', gap: '10px', textTransform: 'none', fontSize: '18px' }}>
                    Done
                </Button>
            </Box>


        </Box>
    </Box>
}

export default BillBooking;