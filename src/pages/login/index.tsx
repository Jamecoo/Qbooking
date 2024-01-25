import * as React from 'react';
import { Typography, TextField, Button, Box, Link } from '@mui/material';

//import
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

//signWithGoolge
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from '../../firebase';



const LoginPage = () => {

    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const SIGN_WITH_GOOGLE = () => {

        signInWithPopup(auth, provider)
            .then((result) => {

                const user = result.user;
                console.log("user >>>", user)

            }).catch((error) => {

                const errorCode: string = error.code;
                alert(errorCode)

            });

    }



        return <Box sx={{ display: 'flex', justifyContent: 'center', minHeight: '100vh', alignItems: 'center' }}>

            <Box sx={{ maxWidth: 400, padding: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <img width={'184px'} height={'183px'} src="https://s3-alpha-sig.figma.com/img/fc73/49f7/2a74b755e5ec5abdb69347f1ee98409f?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IKnEdoAVO1JE3WCqaVwweY53mcZqoZyx5M1sZqypEiiccMATP3wHbpjfy9zfl7mjGryWmsvGflWoNOjw31o24HeBMoBIzyrEmO3PoIkrWUAJbhOX3numgSAgpfh51WAC9~ETyOcBUY9bq4hyScSEz4TmQsbvzEn0Ali6Cktn~uKIDE50AJuo55w~EPvf1jJgi0Zw9x1~uBcvbmN9KgmaonfD729X-eWKXCCrdXB6-BLdffwxG7ZOAFJbAp3T93RABV8Eh2t95wy3qC8EIBR7c1PTO7hcFwUxKqM~JJQoBvdznwKyejM9W3jfsVyHfivHGgTAT2QQk-JAOboDeaJ8mA__" alt="" />
                </Box>
                <Typography variant='h6' sx={{ marginBottom: '20px', fontWeight: '600', textAlign: 'center' }}>
                    Login to your Account
                </Typography>
                <form>

                    <TextField margin='normal' type='email' label="Email or Phone number" variant="outlined" required fullWidth />
                    <TextField
                        type={showPassword ? 'text' : 'password'}
                        label="Password"
                        variant="outlined"
                        required
                        fullWidth
                        margin="normal"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />

                    <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                        <Link href="/ForgotPassword" sx={{ textDecoration: 'none', color: 'black' }}>
                            <p style={{ fontSize: '14px', padding: '15px' }}>Forgot  Password?</p>
                        </Link>

                    </Box>

                    <Button type='submit' variant="contained" sx={{ width: '100%', height: '45px', backgroundColor: '#282828', borderRadius: '10px' }}> Sign In</Button>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <hr style={{ width: '231px', height: '1px', backgroundColor: '#282828', marginTop: '30px' }} />
                    </Box>

                    <Typography sx={{ fontWeight: '500', textAlign: 'center', marginTop: '10px' }}>Or sign up with</Typography>

                    <Button onClick={SIGN_WITH_GOOGLE}><GoogleIcon/></Button>


                        
                    <p style={{ textAlign: 'center', marginTop: '50px' }}>Already have an account? <Link href="/Create">Sign Up</Link> </p>


                </form>
            </Box>
        </Box>

    }


    export default LoginPage;