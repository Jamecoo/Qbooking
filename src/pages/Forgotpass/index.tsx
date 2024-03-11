import { Typography, TextField, Button, Box } from '@mui/material';

//images

import Logo from '../../assets/img/Logo.png'

export default function Forgot() {

    return (

        <Box sx={{ display: 'flex', justifyContent: 'center', minHeight: '100vh', alignItems: 'center' }}>

            <Box sx={{ maxWidth: 400, padding: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '50px' }}>
                    <img width={'184px'} height={'183px'} src={Logo} alt="" />
                </Box>
                <Typography variant='h6' sx={{ marginBottom: '10px', fontWeight: '600', textAlign: 'center' }}>
                    Search your Account
                </Typography>

                <TextField margin='normal' type='email' label="Email or Phone number" variant="outlined" required fullWidth />

                <Button fullWidth type='submit' variant="contained" sx={{ height: '55px', backgroundColor: '#282828', borderRadius: '10px', marginTop: '10px', textTransform: 'none' }}> Search</Button>

            </Box>
        </Box>
    )
}