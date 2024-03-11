import { FormEvent, useState } from "react"
import { useNavigate } from 'react-router-dom';

//signWithGoolge
import { GoogleAuthProvider, signInWithPopup, getAuth, signInWithRedirect } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";
import { app } from '../../../firebase';

import axios from "axios";


const useMainController = () => {
    //Hooks
    
    const [contact, setContact] = useState<string>("");
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [errormessage,_setErrorMessage] = useState<string>("")
    const [showPassword, setShowPassword] = useState<Boolean>(false);
    const [error, setError] = useState<any>(null);
    const [_loggedInUser, _ser] = useState(null);
    // const [errorinput, setErrorinput] = useState<boolean>(false);

    //variables
    const provider = new GoogleAuthProvider();
    const fbAuthProvider = new FacebookAuthProvider();
    const auth = getAuth(app);
    const navigate = useNavigate();



    const SIGN_WITH_GOOGLE = () => {

        signInWithPopup(auth, provider)
            .then((result) => {

                const user = result.user;
                console.log("user >>>", user)
                navigate('/home');


            }).catch((error) => {

                const errorCode: string = error.code;
                alert(errorCode)

            });

    }

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    // Login facebook
    const FacebookAuth = () => {

        signInWithRedirect(auth, fbAuthProvider)
            .then((result: any) => {
                const user = result.user;
                console.log("user >>>", user)
                navigate('/home');

            }).catch((error) => {

                const errorCode: string = error.code;
                alert(errorCode)

            });

    }

    //Login Email, password


    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://779b-2400-c180-20-dff1-897c-d135-898c-c784.ngrok-free.app/api/contact/login', {
                contact,
                password
            });
            const { token } = response.data; 
            localStorage.setItem('token', token);
            localStorage.setItem('user', response.data.user);
            setError(null);
            navigate('/home')
            
        } catch (error: any) {
            setError(error.response?.data?.message || "An error occurred");
            console.log(error)
        }
    };


    return {
        error,
        setContact,
        contact,
        email,
        setEmail,
        password,
        setPassword,
        errormessage,
        showPassword,
        SIGN_WITH_GOOGLE,
        handleClickShowPassword,
        handleMouseDownPassword,
        FacebookAuth,
        handleLogin,


    }
}

export default useMainController;