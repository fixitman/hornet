import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container'
import { Link, useNavigate } from 'react-router-dom';



const styles = {

  logo: {
    textDecoration: 'none',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
  },

  navlinks: {
    display: { xs: 'none', sm: 'flex' },
    alignItems: 'center',
    flexGrow: 1,
    marginLeft: 2,
  },

  buttonStyle: {
    color: 'white',
    textAlign: 'start',
    "&:hover":{color:'yellow'}
  },

  loginMenu: {
    
  },

  menuHolder: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  }
}




export default function MyAppBar() {

  const navigate = useNavigate()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='primary' >
        <Container>
          <Toolbar >
            <Box sx={{ ...styles.menuHolder }}>
              <Link to={'/'} style={styles.logo }>L O G O</Link>
              <Box sx={styles.navlinks}>
                <Button size='large' onClick={() => navigate('/Login')} sx={{...styles.buttonStyle }}>Test1</Button>
                <Button size='large' onClick={() => navigate('/Login')} sx={styles.buttonStyle}>Test2</Button>
                <Button size='large' onClick={() => navigate('/Login')} sx={styles.buttonStyle}>Test3</Button>
                <Button size='large' onClick={() => navigate('/Login')} sx={styles.buttonStyle}>Test4</Button>
              </Box>

              <Box sx={{ ...styles.loginMenu }}>
                <Button size='large' onClick={() => navigate('/Login')} sx={{ ...styles.buttonStyle }}>Login</Button>
              </Box>
            </Box>


          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}






