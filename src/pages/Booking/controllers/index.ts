import { ChangeEvent, useState } from "react";
import { BookingModel } from "../../../models/booking";

//images
import Room1 from '../../../img/Room2.jpg'
import Room2 from '../../../img/Room3.jpg'
import { useNavigate } from "react-router-dom";

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