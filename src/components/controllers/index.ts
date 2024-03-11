import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';



const useMainController = () => {
    //Hooks
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const [value, setValue] = useState<string>('Home');
    const [Like, setLike] = useState<string[]>([]);
    const [selectedLink, setSelectedLink] = useState<string>('');
    const [inputStates, setInputstates] = useState({
        input1: 0,
        input2: 0,
        input3: 0,
        input4: 0,
        input5: 0,
    })

    const navigate = useNavigate();
    const location = useLocation();


    //Functions
    const handleDecrement = (inputKey: keyof typeof inputStates) => {
        setInputstates(prevStates => ({
            ...prevStates,
            [inputKey]: Math.max(0, prevStates[inputKey] - 1)
        }));
    };

    const handleIncrement = (inputKey: keyof typeof inputStates) => {
        setInputstates(prevStates => ({
            ...prevStates,
            [inputKey]: prevStates[inputKey] + 1
        }));
    };

    const handleLinkClick = (link: string) => {
        setSelectedLink(link);
    };

    const handleButtonClick = (path: string) => {
        navigate(path);
    };


    const toggleLike = (icon: string) => {
        if (Like.includes(icon)) {
            setLike(prevIcons => prevIcons.filter(item => item !== icon)); // Remove the icon if already liked
        } else {
            setLike(prevIcons => [...prevIcons, icon]); // Add the icon to liked icons
        }
    };


    //BottomNav

    const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);

        // Use navigate to redirect to the desired path
        if (newValue === 'home') {
            navigate('/home');
        } else if (newValue === 'favorites') {
            navigate('/favorites');
        } else if (newValue === 'booking') {
            navigate('/booking');
        } else if (newValue === 'notifications') {
            navigate('/notifications');
        } else if (newValue === 'profile') {
            navigate('/profile');
        }
    };


    const shouldShowBottomNav = !(location.pathname === "/" || location.pathname === "/register"
        || location.pathname === "/forgotPassword" || location.pathname === "/submit" || location.pathname === "/otpages");

    const handleChangeDate = (event: ChangeEvent<HTMLInputElement>) => {
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



    return {
        value,
        setValue,
        setSelectedLink,
        selectedLink,
        handleLinkClick,
        handleButtonClick,
        shouldShowBottomNav,
        handleChange,
        setInputstates,
        inputStates,
        calculateDaysOfWeek,
        handleChangeDate,
        selectedDate,
        handleDecrement,
        handleIncrement,
        toggleLike,
        Like,




    }
}

export default useMainController 
