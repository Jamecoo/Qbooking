//components

import { Box } from '@mui/material';
import RoutesComponent from './routes';
import BottomNav from './components/BottomNav';
//import LoginPage from './pages/login';

function App() {
  return (
    <>
      <Box sx={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box sx={{ maxWidth: '430px' , display: 'flex', flexDirection: 'column', height: '100%'}}>
          <Box sx={{ overflow: 'auto' }}>
            <RoutesComponent />
          </Box>
          <BottomNav />
        </Box>

      </Box>
    </>
  );
}

export default App;
