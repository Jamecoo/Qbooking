import { Typography, TextField, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

//icons
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';

//images
import LogoQ from '../../../public/Logo.png'
import GoogleJpg from '../../img/Google.jpg'
import Facebook from '../../img/facebook.jpg'

//Controllers
import useMainController from './controllers';



const LoginPage = () => {

    const controller = useMainController();

    return <Box sx={{ display: 'flex', justifyContent: 'center', minHeight: '100vh', alignItems: 'center' }}>

        <Box sx={{ maxWidth: 400, padding: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
                <img width={'184px'} height={'183px'} src={LogoQ} alt="" />
            </Box>
            <Typography variant='h6' sx={{ marginBottom: '20px', fontWeight: '600', textAlign: 'center' }}>
                Login to your Account
            </Typography>
            <form onSubmit={controller.handleSubmit}>

                <TextField margin='normal' type='email' value={controller.email} label="Email or Phone number" variant="outlined" required fullWidth
                    onChange={(e) => controller.setEmail(e.target.value)}
                    InputProps={{
                        style: { borderRadius: '10px' }
                    }} />
                <TextField
                    type={controller.showPassword ? 'text' : 'password'}
                    value={controller.password}
                    label="Password"
                    variant="outlined"
                    required
                    fullWidth
                    margin="normal"
                    onChange={(e) => controller.setPassword(e.target.value)}
                    InputProps={{
                        style: { borderRadius: '10px' },
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={controller.handleClickShowPassword}
                                    onMouseDown={controller.handleMouseDownPassword}
                                    edge="end"
                                >
                                    {controller.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />

                {controller.errormessage && <div>{controller.errormessage}</div>}

                <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                    <Link to="/forgotPassword" style={{ textDecoration: 'none', color: 'black' }}>
                        <p style={{ fontSize: '14px', padding: '15px' }}>Forgot  Password?</p>
                    </Link>

                </Box>

                <Button type='submit' variant="contained" sx={{ width: '100%', height: '58px', backgroundColor: '#282828', borderRadius: '10px', textTransform: 'none' }}> Sign In</Button>

                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <hr style={{ width: '231px', height: '1px', backgroundColor: '#282828', marginTop: '30px' }} />
                </Box>

                <Typography sx={{ fontWeight: '500', textAlign: 'center', marginTop: '10px' }}>Or sign up with</Typography>

                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px', gap: '10px' }}>
                    <Button sx={{ borderRadius: '40px', padding: '10px', border: '1px solid gray' }} onClick={controller.SIGN_WITH_GOOGLE}>
                        <img src={GoogleJpg} alt="" />
                    </Button>
                    <Button sx={{ border: '1px solid gray', borderRadius: '40px', padding: '10px' }} onClick={controller.FacebookAuth}>
                        <img style={{ width: '40px' }} src={Facebook} alt="" />
                    </Button>
                </Box>

                <p style={{ textAlign: 'center', marginTop: '50px' }}>Already have an account? <Link to="/register">Sign Up</Link> </p>


            </form>
        </Box>
    </Box>

}


export default LoginPage;