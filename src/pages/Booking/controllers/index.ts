import { ChangeEvent, useEffect, useState } from "react";
import { BookingModel } from "../../../models/booking";

//images
import Room1 from '../../../assets/img/Room2.jpg'
import Room2 from '../../../assets/img/Room3.jpg'
import { useNavigate } from "react-router-dom";
import axios from "axios";

//Models


const useMainController = () => {

    const navigate = useNavigate();
    //State
    const [data, setData] = useState<BookingModel[]>([]);
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [Room1, Room2];

    //function
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value; // Assuming the input value is a string representing the date
        const parsedDate = new Date(inputValue);
        setSelectedDate(parsedDate);
    };
    const calculateDaysOfWeek = () => {
        if (!selectedDate) return [];

        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const selectedDateObj = new Date(selectedDate);
        const selectedDayIndex = selectedDateObj.getDay();
        const days = [];

        for (let i = 0; i < 7; i++) {
            const date = new Date(selectedDateObj);
            date.setDate(date.getDate() + i - 3);
            const day = daysOfWeek[(selectedDayIndex + i + 4) % 7];
            const formattedDate = date.getDate();

            days.push({ day, date: formattedDate });
        }

        return days;
    };

    const handleClick = () => {
        console.info('You clicked the Chip.');
    };

    const handleNextClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const handlePrevClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };


    const handleButtonClick = (path: string) => {
        navigate(path);
    };

    useEffect(() => {
        const fetchData = async () => {
            // try {
                axios.defaults.headers.common.Authorization = `Bearer  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTE0YTUwZTdjNDU4OGYxZjZhOWU2ZCIsImlhdCI6MTcwOTI2NjA5OSwiZXhwIjoxNzA5Mjk0ODk5fQ.wVKVPb-vm5GOnnv4pYVPpJfG55wccm4k1643lCdx1S0`
                const response = await axios.get('https://7ec0-115-84-115-100.ngrok-free.app/api/booking');
                console.log(response);

            //     setRooms(response.data);
            //     setLoading(false);
            // } catch (error : any) {
            //     setError('Error fetching data: ' + error?.message); 
            //     setLoading(false);
            // }
        };

        fetchData();
    }, []); 

    // Dependency array is empty for one-time fetch

    return {
        data,
        setData,
        selectedDate,
        setSelectedDate,
        currentImageIndex,
        setCurrentImageIndex,
        handleChange,
        calculateDaysOfWeek,
        handleClick,
        handleNextClick,
        handlePrevClick,
        handleButtonClick,
    }
}
export default useMainController;