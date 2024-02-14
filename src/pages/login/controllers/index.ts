import { useState } from "react"


//signWithGoolge
import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";
import { app } from '../../../firebase';
import { useNavigate } from 'react-router-dom';


const useMainController = () => {
    //Hooks
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errormessage, _setErrorMessage] = useState("")
    const [showPassword, setShowPassword] = useState(false);

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

        signInWithPopup(auth, fbAuthProvider)
            .then((result) => {
                const user = result.user;
                console.log("user >>>", user)
                navigate('/home');

            }).catch((error) => {

                const errorCode: string = error.code;
                alert(errorCode)

            });

    }

    //Login Email, password

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential)

                navigate('/home')
            }).catch((error) => {
                console.log(error);
            });
    };


    return {
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
        handleSubmit


    }
}

export default useMainController;