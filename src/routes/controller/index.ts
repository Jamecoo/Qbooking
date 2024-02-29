import { useState } from "react";

const useMainController = () => {

    const [isLogin, setIsLogin] = useState<boolean>(false);

    const handleLogin = () => {
        // Perform login logic, set isLoggedIn to true if login is successful
        setIsLogin(true);
    };

    return {
        isLogin,
        setIsLogin,
        handleLogin

    }
}

export default useMainController;