import { useNavigate } from "react-router-dom";


const useMainController = () => {

    const navigate = useNavigate();

    const handleButtonClick = (path: string) => {
        navigate(path);
    };

    return {
        handleButtonClick,

    }
}

export default useMainController;