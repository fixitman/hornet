import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container'
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material';
import LoginOut from './LoginOut';


export default function MyAppBar() {  

  const theme = useTheme()
  const styles = {

    logo: {
      textDecoration: 'none',
      color: theme.palette.common.white,
      fontWeight: 'bold',
      fontSize: 22,
      margin:0
    },

    navlinks: {
      display: { xs: 'none', sm: 'flex' },
      alignItems: 'center',
      flexGrow: 1,
      marginLeft: 2,
    },

    buttonStyle: {
      color: theme.palette.common.white,
      textAlign: 'start',
      "&:hover": { color: theme.palette.text.secondary }
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



  const navigate = useNavigate()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" >
        <Container maxWidth='md'>
          <Toolbar sx={styles.menuHolder}>
           
              <Link to={'/'} style={styles.logo}>L O G O</Link>
              
              <Box sx={styles.navlinks}>
                <Button size='large' onClick={() => navigate('/Login')} sx={styles.buttonStyle}>Test1</Button>
                <Button size='large' onClick={() => navigate('/Restricted')} sx={styles.buttonStyle}>Restricted</Button>
              </Box>

              <Box sx={{ ...styles.loginMenu }}>
                <LoginOut/>
              </Box>

          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}






