import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container'
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material';

export default function MyAppBar() {

  const theme = useTheme()
  const styles = {

    logo: {
      textDecoration: 'none',
      color: theme.palette.common.white,
      fontWeight: 'bold',
      fontSize: 22,
    },

    navlinks: {
      display: { xs: 'none', md: 'flex' },
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
        <Container>
          <Toolbar sx={styles.menuHolder}>
           
              <Link to={'/'} style={styles.logo}>L O G O</Link>
              
              <Box sx={styles.navlinks}>
                <Button size='large' onClick={() => navigate('/Login')} sx={styles.buttonStyle}>Test1</Button>
                <Button size='large' onClick={() => navigate('/Login')} sx={styles.buttonStyle}>Test2</Button>
                <Button size='large' onClick={() => navigate('/Login')} sx={styles.buttonStyle}>Test3</Button>
                <Button size='large' onClick={() => navigate('/Login')} sx={styles.buttonStyle}>Test4</Button>
              </Box>

              <Box sx={{ ...styles.loginMenu }}>
                <Button size='large' onClick={() => navigate('/Login')} sx={{ ...styles.buttonStyle }}>Login</Button>
              </Box>

          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}






