import { Avatar, Box, Typography, IconButton, TextField, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import EditIcon from '@mui/icons-material/Edit';
import useMainController from "../controllers";


const EditProfile = () => {

    const controller = useMainController();

    

    const countries = [
        'Afghanistan',
        'Albania',
        'Algeria',
        'Andorra',
        'Angola',
        'Antigua and Barbuda',
        'Argentina',
        'Armenia',
        'Australia',
        'Austria',
        'Azerbaijan',
        'Bahamas',
        'Bahrain',
        'Bangladesh',
        'Barbados',
        'Belarus',
        'Belgium',
        'Belize',
        'Benin',
        'Bhutan',
        'Bolivia',
        'Bosnia and Herzegovina',
        'Botswana',
        'Brazil',
        'Brunei',
        'Bulgaria',
        'Burkina Faso',
        'Burundi',
        'Cabo Verde',
        'Cambodia',
        'Cameroon',
        'Canada',
        'Central African Republic',
        'Chad',
        'Chile',
        'China',
        'Colombia',
        'Comoros',
        'Congo',
        'Costa Rica',
        'Croatia',
        'Cuba',
        'Cyprus',
        'Czech Republic',
        'Denmark',
        'Djibouti',
        'Dominica',
        'Dominican Republic',
        'Ecuador',
        'Egypt',
        'El Salvador',
        'Equatorial Guinea',
        'Eritrea',
        'Estonia',
        'Eswatini',
        'Ethiopia',
        'Fiji',
        'Finland',
        'France',
        'Gabon',
        'Gambia',
        'Georgia',
        'Germany',
        'Ghana',
        'Greece',
        'Grenada',
        'Guatemala',
        'Guinea',
        'Guinea-Bissau',
        'Guyana',
        'Haiti',
        'Honduras',
        'Hungary',
        'Iceland',
        'India',
        'Indonesia',
        'Iran',
        'Iraq',
        'Ireland',
        'Israel',
        'Italy',
        'Jamaica',
        'Japan',
        'Jordan',
        'Kazakhstan',
        'Kenya',
        'Kiribati',
        'Kosovo',
        'Kuwait',
        'Kyrgyzstan',
        'Laos',
        'Latvia',
        'Lebanon',
        'Lesotho',
        'Liberia',
        'Libya',
        'Liechtenstein',
        'Lithuania',
        'Luxembourg',
        'Madagascar',
        'Malawi',
        'Malaysia',
        'Maldives',
        'Mali',
        'Malta',
        'Marshall Islands',
        'Mauritania',
        'Mauritius',
        'Mexico',
        'Micronesia',
        'Moldova',
        'Monaco',
        'Mongolia',
        'Montenegro',
        'Morocco',
        'Mozambique',
        'Myanmar',
        'Namibia',
        'Nauru',
        'Nepal',
        'Netherlands',
        'New Zealand',
        'Nicaragua',
        'Niger',
        'Nigeria',
        'North Korea',
        'North Macedonia',
        'Norway',
        'Oman',
        'Pakistan',
        'Palau',
        'Palestine',
        'Panama',
        'Papua New Guinea',
        'Paraguay',
        'Peru',
        'Philippines',
        'Poland',
        'Portugal',
        'Qatar',
        'Romania',
        'Russia',
        'Rwanda',
        'Saint Kitts and Nevis',
        'Saint Lucia',
        'Saint Vincent and the Grenadines',
        'Samoa',
        'San Marino',
        'Sao Tome and Principe',
        'Saudi Arabia',
        'Senegal',
        'Serbia',
        'Seychelles',
        'Sierra Leone',
        'Singapore',
        'Slovakia',
        'Slovenia',
        'Solomon Islands',
        'Somalia',
        'South Africa',
        'South Korea',
        'South Sudan',
        'Spain',
        'Sri Lanka',
        'Sudan',
        'Suriname',
        'Sweden',
        'Switzerland',
        'Syria',
        'Taiwan',
        'Tajikistan',
        'Tanzania',
        'Thailand',
        'Timor-Leste',
        'Togo',
        'Tonga',
        'Trinidad and Tobago',
        'Tunisia',
        'Turkey',
        'Turkmenistan',
        'Tuvalu',
        'Uganda',
        'Ukraine',
        'United Arab Emirates',
        'United Kingdom',
        'United States of America',
        'Uruguay',
        'Uzbekistan',
        'Vanuatu',
        'Vatican City',
        'Venezuela',
        'Vietnam',
        'Yemen',
        'Zambia',
        'Zimbabwe'
    ];


    //function
    


    return <Box sx={{ display: 'flex', minHeight: '100vh', justifyContent: 'center' }}>
        <Box sx={{ width: '100%', backgroundColor: 'white' }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: '97px',
                    backgroundColor: 'white',
                    paddingX: '20px',
                    borderBottom: '1px solid #ddd',

                }}>

                <IconButton onClick={() => controller.handleButtonClick('/profile')}>
                    <ArrowBackIosIcon sx={{ fontSize: '20px', fontWeight: 700, color: 'black' }} />
                </IconButton>

                <Typography variant="h5" sx={{ fontWeight: 550 }}>
                    Edit Profile
                </Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '30px' }}>
                <Box sx={{ position: 'relative' }}>
                    <Avatar
                        alt="Profile"
                        src="https://scontent.fvte3-1.fna.fbcdn.net/v/t39.30808-6/340375027_552193037048423_558996166742457768_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeE7uAqMbcyCzBtuP98ODzaBtLqBn-_nkM60uoGf7-eQzhdpTe1WKL2h7UtO40xKKJOh_UXKq_MNKuefacSls7U9&_nc_ohc=6pLJMZpJ9pYAX9MUBaa&_nc_ht=scontent.fvte3-1.fna&oh=00_AfByfJh-2zYFabKGr9ypYgcoLyMMs2OHcmipeg0A-uoM7w&oe=65C03ADE"
                        sx={{ width: 166, height: 166 }}
                    />
                    <IconButton
                        sx={{
                            position: 'absolute',
                            bottom: 5,
                            right: 0,
                            backgroundColor: 'black',
                            borderRadius: '50%',
                            padding: '5px',
                            color: 'white'
                        }}
                    >
                        <EditIcon />
                    </IconButton>
                </Box>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', margin: '30px', marginTop: '50px' }} >
                <TextField label="Name" variant="outlined" margin="normal" InputProps={{
                    style: { borderRadius: '10px', height: '62px' }
                }} />

                <TextField label="Gmail" variant="outlined" margin="normal" type="email" InputProps={{
                    style: { borderRadius: '10px', height: '62px' }
                }} />

                <FormControl fullWidth margin="normal">
                    <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                    <Select value={controller.gender} onChange={controller.handleChange} label="Gender" sx={{ borderRadius: '10px', height: '62px' }} >
                        <MenuItem value="female">Female</MenuItem>
                        <MenuItem value="male">Male</MenuItem>
                        <MenuItem value="Others">Others</MenuItem>
                    </Select>
                </FormControl>

                <TextField label="Phone number" variant="outlined" margin="normal" InputProps={{
                    style: { borderRadius: '10px', height: '62px' }
                }} />

                <FormControl fullWidth margin="normal">
                    <InputLabel id="demo-simple-select-label">Country</InputLabel>
                    <Select value={controller.country} onChange={controller.handleChangeCountry} label="Gender" sx={{ borderRadius: '10px', height: '62px' }}>
                        {countries.map((country, index) => (
                            <MenuItem key={index} value={country}>
                                {country}
                            </MenuItem>
                        ))}
                        
                    </Select>
                </FormControl>



            </Box>






        </Box>
    </Box>
}

export default EditProfile;