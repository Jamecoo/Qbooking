import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//Models
import { RoomModel } from '../../../models/roomBoking'
import axios from "axios";

const useMainController = () => {

    //Hooks For room
    const [rooms, setRooms] = useState<RoomModel[]>([]);
    const [imageData, setImageData] = useState<any>([]);
    console.log(imageData);

    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const [Like, setLike] = useState<string[]>([]); // State for Box 1 favorite status
    const [selectedLink, setSelectedLink] = useState<string>('');
    const navigate = useNavigate();


    //Functions

    const toggleLike = (boxId: string) => {
        if (Like.includes(boxId)) {
            setLike(prevLikedBoxes => prevLikedBoxes.filter(id => id !== boxId)); // Remove box from favorites if already liked
        } else {
            setLike(prevLikedBoxes => [...prevLikedBoxes, boxId]); // Add box to favorites
        }
    };


    // const toggleLike = (icon: string) => {
    //     if (Like.includes(icon)) {
    //         setLike(prevIcons => prevIcons.filter(item => item !== icon)); // Remove the icon if already liked
    //     } else {
    //         setLike(prevIcons => [...prevIcons, icon]); // Add the icon to liked icons
    //     }
    // };

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

    const fetchData = async () => {

        try {
            axios.defaults.headers.common.Authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTg0NWZmN2MzZDFkYmY5YTljNGEzMSIsImlhdCI6MTcwOTc4MzYyOSwiZXhwIjoxNzA5ODEyNDI5fQ.8dCBxlGgRCEq5VqRLuTJTGMRDvFWlFyALrRlaLQ2YFY'
            const res = await axios.get('https://iqbooking.onrender.com/api/room', {
                headers: {
                    "ngrok-skip-browser-warning": "69420"
                }
            })
            const data = res.data
            console.log(data)
            setRooms(data)
        } catch (error) {
            console.log(error)
        }


    };


    const roomImage = rooms?.map((item) => {
        const image = imageData
    }
    )

    const handleGetImageData = async () => {
        try {
            let url: any = [];
            let data: any = [];
            if (rooms?.length > 0) {
                rooms?.map((item: any) => url.push({ id: item?._id, imageName: item?.images[0] }))

                console.log(url)
                url?.map(async (item: any) => {
                    const res = await axios.get(`https://iqbooking.onrender.com/api/room/picture/${item?.imageName}`, {
                        headers: {
                            "ngrok-skip-browser-warning": "69420"
                        }
                    })
                    data.push({ id: item?.id, image: res.data })
                })
                setImageData(data)

            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {

        fetchData();
    }, []);

    useEffect(() => {
        if (rooms?.length > 0) {
            handleGetImageData();
        }
    }, [rooms]);


    const handleFavoriteClick = (roomId: string) => {

        console.log('Favorite clicked for room ID:', roomId);
    };

    return {

        //Hooks
        imageData,
        rooms,
        setRooms,
        loading,
        setLoading,
        error,
        setError,
        handleFavoriteClick,
        Like,
        toggleLike,
        selectedLink,
        setSelectedLink,
        handleButtonClick,
        handleLinkClick,
        handleTextfiledClick

    }

}

export default useMainController;