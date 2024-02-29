import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//Models
import { RoomModel } from '../../../models/roomBoking'
import axios from "axios";

const useMainController = () => {

    //Hooks For room
    const [rooms, setRooms] = useState<RoomModel[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);



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

    const handleButtonClick = (path: string, event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.stopPropagation(); // Stop event propagation
        navigate(path);
    };


    const handleTextfiledClick = (path: string) => {
        navigate(path);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                axios.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZGZmOGUyMWE3MTVmZDBjYTAzYmIxNCIsImlhdCI6MTcwOTE3ODIxNywiZXhwIjoxNzA5MjA3MDE3fQ.GbI1MCnRbejt3KjbHbYLGBRmaDoxxQpKjRGvSJhq7ec`
                const response = await axios.get('https://1399-2400-c180-21-ddb7-dbb-1e2a-1577-30e.ngrok-free.app/api/room');
                console.log(response);
                
                setRooms(response.data);
                setLoading(false);
            } catch (error : any) {
                setError('Error fetching data: ' + error?.message); 
                setLoading(false);
            }
        };
    
        fetchData();
    }, []); // Dependency array is empty for one-time fetch
    
    


    const handleFavoriteClick = (roomId: string) => {

        console.log('Favorite clicked for room ID:', roomId);
    };


    return {

        //Hooks
        rooms,
        setRooms,
        loading,
        setLoading,
        error,
        setError,
        handleFavoriteClick,

        isFavorite1,
        setIsFavorite1,
        isFavorite2,
        setIsFavorite2,
        selectedLink,
        setSelectedLink,
        handleButtonClick,
        handleFavoriteClick1,
        handleFavoriteClick2,
        handleLinkClick,
        handleTextfiledClick

    }

}

export default useMainController;