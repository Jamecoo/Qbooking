import { Box, Button, Typography, Input, IconButton, TextField, InputAdornment } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import { useNavigate } from 'react-router-dom';

//icons
import EventIcon from '@mui/icons-material/Event';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';



import { ChangeEvent, useState } from 'react';

const Filter = () => {

    const [selectedDate, setSelectedDate] = useState<Date>(new Date());


    const [inputStates, setInputstates] = useState({
        input1: 0,
        input2: 0,
        input3: 0,
        input4: 0,
        input5: 0,
    })
    const navigate = useNavigate();

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
    const handleButtonClick = () => {

        navigate('/home');
    };


    return <Box sx={{ display: 'flex', minHeight: '100vh', justifyContent: 'center' }}>
        <Box sx={{ width: '100%', backgroundColor: '#E8E8E8' }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: '97px',
                    backgroundColor: 'white',
                    paddingX: '20px', // Add padding to space the elements
                    borderBottom: '1px solid #ddd', // Add a border at the bottom for separation
                }}
            >
                <IconButton onClick={handleButtonClick} sx={{ borderRadius: '20px', backgroundColor: 'transparent' }}>
                    <ArrowBackIosIcon sx={{ fontSize: '20px', fontWeight: 700, color: 'black' }} />
                </IconButton>
                <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    Filter
                </Typography>

            </Box>

            <Typography sx={{ padding: '30px 30px', fontWeight: 600, fontSize: '20px' }}>
                Filter Time your meet?
            </Typography>

            <Box sx={{ height: '90px', backgroundColor: 'white', borderRadius: '5px', display: 'flex', flexDirection: 'column', margin: '0 20px' }}>
                <Box sx={{ flexGrow: 1, padding: '10px', paddingTop: '10px', display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                        <Typography>
                            Time
                        </Typography>

                        <Typography>
                            10:00am - 12:00am
                        </Typography>
                    </Box>


                    <SparkLineChart
                        plotType="bar"
                        data={[5, 6, 4, 4, 2, 1, 2, 1, 5, 6, 7, 8, 6, 8, 4, 4, 3, 2, 1, 1, 1, 1, 0.5]}
                        height={50}
                        colors={['gray']}
                        showTooltip
                    />
                    <hr style={{ marginTop: '-5px' }} />
                </Box>
            </Box>

            <hr
                style={{
                    width: '343px',
                    height: '1px',
                    backgroundColor: '#282828',
                    margin: '30px auto',
                    border: 'none',
                }}
            />

            <Box sx={{ paddingX: '20px', marginTop: '50px' }}>
                <TextField type='date' variant='standard' value={selectedDate.toISOString().split('T')[0]}
                    onChange={handleChange}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <EventIcon />
                            </InputAdornment>
                        )
                    }}
                    />
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(7, 1fr)',
                        gap: '5px',
                        marginTop: '40px',
                        



                    }}
                >
                    {calculateDaysOfWeek().map(({ day, date }, index) => (
                        <Box key={index} sx={index === 3 ? { backgroundColor: 'white', borderRadius: '15px' } : {}}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', fontWeight: '700  ' }}>{day}</Box>
                            <span style={{ display: 'flex', justifyContent: 'center' }}>{date}</span>

                        </Box>
                    ))}
                </Box>
            </Box>




            <Box sx={{ display: 'flex', marginTop: '50px' }}>
                <Typography sx={{ paddingLeft: '25px', fontWeight: 600 }}>
                    EQUIPMENT:
                </Typography>
            </Box>

            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', justifyContent: 'space-between', marginTop: '20px', paddingX: '25px' }}>
                <p>Capacity</p>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <IconButton onClick={() => setInputstates(prevStates => ({ ...prevStates, input1: prevStates.input1 - 1 }))} style={{ width: '28px', height: '28px', borderRadius: '20px', marginRight: '10px', fontSize: '20px', textAlign: 'center', color: 'white', backgroundColor: 'black' }}>
                        <RemoveIcon fontSize="small" />
                    </IconButton>
                    <Input value={inputStates.input1} inputProps={{ style: { textAlign: 'center' } }} sx={{ width: '60px', height: '30px', border: '1px solid black', borderRadius: '6px', textAlign: 'center' }}></Input>
                    <IconButton onClick={() => setInputstates(prevStates => ({ ...prevStates, input1: prevStates.input1 + 1 }))} style={{ width: '28px', height: '28px', borderRadius: '20px', marginLeft: '10px', fontSize: '20px', textAlign: 'center', color: 'white', backgroundColor: 'black' }}>
                        <AddIcon fontSize="small" />
                    </IconButton>
                </Box>
            </Box>

            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', justifyContent: 'space-between', marginTop: '10px', paddingX: '25px' }}>
                <p>Tv</p>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <IconButton onClick={() => setInputstates(prevStates => ({ ...prevStates, input2: prevStates.input2 - 1 }))} style={{ width: '28px', height: '28px', borderRadius: '20px', marginRight: '10px', fontSize: '20px', textAlign: 'center', color: 'white', backgroundColor: 'black' }}>
                        <RemoveIcon fontSize="small" />
                    </IconButton>
                    <Input value={inputStates.input2} inputProps={{ style: { textAlign: 'center' } }} sx={{ width: '60px', height: '30px', border: '1px solid black', borderRadius: '6px', textAlign: 'center' }}></Input>
                    <IconButton onClick={() => setInputstates(prevStates => ({ ...prevStates, input2: prevStates.input2 + 1 }))} style={{ width: '28px', height: '28px', borderRadius: '20px', marginLeft: '10px', fontSize: '20px', textAlign: 'center', color: 'white', backgroundColor: 'black' }}>
                        <AddIcon fontSize="small" />
                    </IconButton>
                </Box>
            </Box>

            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', justifyContent: 'space-between', marginTop: '10px', paddingX: '25px' }}>
                <p>Board</p>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <IconButton onClick={() => setInputstates(prevStates => ({ ...prevStates, input3: prevStates.input3 - 1 }))} style={{ width: '28px', height: '28px', borderRadius: '20px', marginRight: '10px', fontSize: '20px', textAlign: 'center', color: 'white', backgroundColor: 'black' }}>
                        <RemoveIcon fontSize="small" />
                    </IconButton>
                    <Input value={inputStates.input3} inputProps={{ style: { textAlign: 'center' } }} sx={{ width: '60px', height: '30px', border: '1px solid black', borderRadius: '6px', textAlign: 'center' }}></Input>
                    <IconButton onClick={() => setInputstates(prevStates => ({ ...prevStates, input3: prevStates.input3 + 1 }))} style={{ width: '28px', height: '28px', borderRadius: '20px', marginLeft: '10px', fontSize: '20px', textAlign: 'center', color: 'white', backgroundColor: 'black' }}>
                        <AddIcon fontSize="small" />
                    </IconButton>
                </Box>
            </Box>

            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', justifyContent: 'space-between', marginTop: '10px', paddingX: '25px' }}>
                <p>Microphone</p>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <IconButton onClick={() => setInputstates(prevStates => ({ ...prevStates, input4: prevStates.input4 - 1 }))} style={{ width: '28px', height: '28px', borderRadius: '20px', marginRight: '10px', fontSize: '20px', textAlign: 'center', color: 'white', backgroundColor: 'black' }}>
                        <RemoveIcon fontSize="small" />
                    </IconButton>
                    <Input value={inputStates.input4} inputProps={{ style: { textAlign: 'center' } }} sx={{ width: '60px', height: '30px', border: '1px solid black', borderRadius: '6px', textAlign: 'center' }}></Input>
                    <IconButton onClick={() => setInputstates(prevStates => ({ ...prevStates, input4: prevStates.input4 + 1 }))} style={{ width: '28px', height: '28px', borderRadius: '20px', marginLeft: '10px', fontSize: '20px', textAlign: 'center', color: 'white', backgroundColor: 'black' }}>
                        <AddIcon fontSize="small" />
                    </IconButton>
                </Box>
            </Box>

            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', justifyContent: 'space-between', marginTop: '10px', paddingX: '25px' }}>
                <p>Speaker</p>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <IconButton onClick={() => setInputstates(prevStates => ({ ...prevStates, input5: prevStates.input5 - 1 }))} style={{ width: '28px', height: '28px', borderRadius: '20px', marginRight: '10px', fontSize: '20px', textAlign: 'center', color: 'white', backgroundColor: 'black' }}>
                        <RemoveIcon fontSize="small" />
                    </IconButton>
                    <Input value={inputStates.input5} inputProps={{ style: { textAlign: 'center' } }} sx={{ width: '60px', height: '30px', border: '1px solid black', borderRadius: '6px', textAlign: 'center' }}></Input>
                    <IconButton onClick={() => setInputstates(prevStates => ({ ...prevStates, input5: prevStates.input5 + 1 }))} style={{ width: '28px', height: '28px', borderRadius: '20px', marginLeft: '10px', fontSize: '20px', textAlign: 'center', color: 'white', backgroundColor: 'black' }}>
                        <AddIcon fontSize="small" />
                    </IconButton>
                </Box>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '40px', marginBottom: '20px' }}>
                <Button type='submit' variant="contained" sx={{ height: '59px', backgroundColor: '#282828', borderRadius: '10px', width: '242px', textTransform: 'none' }}> Filter </Button>
            </Box>



        </Box>
    </Box>
}
export default Filter;