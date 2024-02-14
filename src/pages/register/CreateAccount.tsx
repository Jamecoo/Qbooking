import React, { useRef, useState } from 'react';

import { Typography, TextField, Button, Box } from '@mui/material';

//import
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';

//images
import Logo from '../../../public/Logo.png'

//firebase
import { app } from '../../firebase';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';


const Create = () => {

    const [_errormessage, setErrormessage] = useState<string>('');
    const [showPassword, setShowPassword] = React.useState(false);

    const auth = getAuth(app);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const navigate = useNavigate();

    //functions
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const email = emailRef.current?.value || "";
        const password = passwordRef.current?.value || "";

        try {
            const user = await createUserWithEmailAndPassword(auth, email, password)
            console.log(user)
            navigate('/')

        } catch (error) {
            console.log(error);
            if (error instanceof Error) {
                setErrormessage(error.message);
            }
        }




    }


    //function show password
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return <Box sx={{ display: 'flex', justifyContent: 'center', minHeight: '100vh', alignItems: 'center' }}>

        <Box sx={{ maxWidth: 400, padding: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '50px' }}>
                <img width={'184px'} height={'183px'} src={Logo} alt="" />
            </Box>
            <Typography variant='h6' sx={{ marginBottom: '20px', fontWeight: '600', textAlign: 'center' }}>
                Create your Account
            </Typography>
            <form onSubmit={handleSubmit}>

                <TextField margin='normal' type='email' label="Email or Phone number" variant="outlined" inputRef={emailRef} required fullWidth />
                <TextField
                    type={showPassword ? 'text' : 'password'}
                    label="Password"
                    variant="outlined"
                    required
                    inputRef={passwordRef}
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
                <TextField
                    type={showPassword ? 'text' : 'password'}
                    label="Confirm Password"
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

                <Button type='submit' variant="contained" sx={{ width: '100%', height: '45px', backgroundColor: '#282828', borderRadius: '10px', marginTop: '15px', textTransform: 'none' }}> Sign In</Button>

            </form>
        </Box>
    </Box>

}

export default Create;


