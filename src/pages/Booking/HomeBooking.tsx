import { Box, Typography } from "@mui/material"

const HomeBooking = () => {

    
    return <Box sx={{ display: 'flex', minHeight: '100vh', justifyContent: 'center' }}>
        <Box sx={{ width: '100%', backgroundColor: '#E8E8E8' }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '97px',
                    backgroundColor: 'white',
                    paddingX: '20px',
                    borderBottom: '1px solid #ddd',

                }}>

                <Typography variant="h5" sx={{ fontWeight: 550 }}>
                    Booking
                </Typography>
            </Box>

        </Box>
    </Box>

}


export default HomeBooking;