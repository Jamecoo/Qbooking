import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useMainController = () => {

    const [isFavorite1, setIsFavorite1] = useState<boolean>(false); // State for Box 1 favorite status
    const [isFavorite2, setIsFavorite2] = useState<boolean>(false);
    const [selectedLink, setSelectedLink] = useState<string>('');
    const navigate = useNavigate();


    const handleFavoriteClick1 = () => {
        setIsFavorite1(prevFavorite => !prevFavorite); // Toggle the favorite status for Box 1
    };

    const handleFavoriteClick2 = () => {
        setIsFavorite2(prevFavorite => !prevFavorite); // Toggle the favorite status for Box 2
    };


    const handleLinkClick = (link: string) => {
        setSelectedLink(link);
    };


    const handleButtonClick = (path: string) => {
        navigate(path);
    };


    return {
        isFavorite1,
        setIsFavorite1,
        isFavorite2,
        setIsFavorite2,
        selectedLink,
        setSelectedLink,
        handleButtonClick,
        handleFavoriteClick1,
        handleFavoriteClick2,
        handleLinkClick
    }

}

export default useMainController;