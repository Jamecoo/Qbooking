import { Typography, TextField, Button, Box, Link } from '@mui/material';


const Submit = () => {

    return <Box sx={{ display: 'flex', justifyContent: 'center', minHeight: '100vh', alignItems: 'center' }}>

        <Box sx={{ maxWidth: 400, padding: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <img width={'184px'} height={'183px'} src="https://s3-alpha-sig.figma.com/img/fc73/49f7/2a74b755e5ec5abdb69347f1ee98409f?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IKnEdoAVO1JE3WCqaVwweY53mcZqoZyx5M1sZqypEiiccMATP3wHbpjfy9zfl7mjGryWmsvGflWoNOjw31o24HeBMoBIzyrEmO3PoIkrWUAJbhOX3numgSAgpfh51WAC9~ETyOcBUY9bq4hyScSEz4TmQsbvzEn0Ali6Cktn~uKIDE50AJuo55w~EPvf1jJgi0Zw9x1~uBcvbmN9KgmaonfD729X-eWKXCCrdXB6-BLdffwxG7ZOAFJbAp3T93RABV8Eh2t95wy3qC8EIBR7c1PTO7hcFwUxKqM~JJQoBvdznwKyejM9W3jfsVyHfivHGgTAT2QQk-JAOboDeaJ8mA__" alt="" />
            </Box>
            <Typography variant='h6' sx={{ marginBottom: '5px', fontWeight: '600', textAlign: 'center' }}>
                Create your Account
            </Typography>
            <form>

                <TextField margin='normal' type='email' label="Email or Phone number" variant="outlined" required fullWidth />
                
                <Button type='submit' variant="contained" sx={{ width: '100%', height: '45px', backgroundColor: '#282828', borderRadius: '10px', marginTop: '10px' }}> Sign In</Button>

                <Link href='/' sx={{textDecoration: 'none'}}>
                    <p style={{marginTop: '20px', textAlign: 'center'}}>Back to Login</p>
                </Link>

            </form>
        </Box>
    </Box>

}

export default Submit;

