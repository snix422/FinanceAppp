import  { Typography, AppBar, Stack, IconButton, Paper, InputBase, Dialog, Menu, MenuItem, Drawer, Box, Button, setRef, Badge } from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import React, { useState, FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

interface PropsHeader {
  changeAuth(text:string|null):void
}

const Header:FunctionComponent<PropsHeader> = ({changeAuth}) => {

    const [displaySearch, setDisplaySearch] = useState<boolean>(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
  
    const handleClose = () => {
        setOpen(!open);
    }

    const handleClick = (event:any) => {
        setOpen(!open);
        setAnchorEl(event.currentTarget);
      };

      const signOut = () => {
        localStorage.removeItem('currentuser');
        localStorage.removeItem('iduser');
        changeAuth(localStorage.getItem('currentuser'));
      }
 
    return(
        <AppBar sx={{backgroundColor: 'black',position:'absolute', left:0, color: 'black', minHeight: '10vh', display: 'flex', flexDirection:'column', justifyContent:  'center', alignItems: 'center', minWidth:'100vw'}}>
            <Box sx={{display:'flex', alignItems:'center', gap:{
              xl:'800px',
              lg:'600px',
              md:'400px',
              sm:'200px',
              xs:'50px'
            }}}>
            <IconButton size='large' sx={{color:'white'}}>
                <HomeIcon  />
            </IconButton>
           
            <Stack direction={'row'}>
            <IconButton size='large' sx={{display:'flex',flexDirection:'column'}}>
                    <AccountBoxIcon onClick={handleClick} sx={{color:'white'}} />
                   {localStorage.getItem('currentuser') ?  <Box><Typography sx={{fontFamily:'Montserrat', color:'white'}}>{localStorage.getItem('currentuser')}</Typography><Menu
                     anchorEl={anchorEl}
            id="basic-menu"
            open={open}
            onClose={handleClose} >
              
        <Link to="/" style={{textDecoration:'none', color:'black'}}><MenuItem onClick={signOut}>Wyloguj się</MenuItem></Link>
        <MenuItem onClick={handleClose}>Zamknij</MenuItem>
        
      </Menu></Box> : <Menu
                     anchorEl={anchorEl}
            id="basic-menu"
            open={open}
            onClose={handleClose} >
        <Link to="/signin" style={{textDecoration:'none',color:'black'}}><MenuItem >Zaloguj się</MenuItem></Link>
        <Link to="/signup" style={{textDecoration:'none', color:'black'}}><MenuItem >Załóż konto</MenuItem></Link>
        <MenuItem onClick={handleClose}>Zamknij</MenuItem>
        
      </Menu>}
                    
            
            </IconButton>
            
            </Stack>
           
            </Box>
            {displaySearch ? <Paper component={'form'} sx={{marginRight: {
              xl: '400px',
              lg: '300px',
              md:'200px',
              sm:'80px',
              xs:'30px'
            }, marginLeft: {
              xl: '400px',
              lg: '300px',
              md:'200px',
              sm:'80px',
              xs:'30px'
            },display:{
              xl:'none',
              lg:'none',
              md:'none',
              sm:'none',
              xs:'block'
            }, borderRadius: '25px', marginBottom:'5px'}}>
                <InputBase  sx={{borderRadius: '50%',maxHeight:'10px', width: {
                  xl:'550px',
                  lg:'400px',
                  md:'300px',
                  sm:'230px',
                  xs:'120px'
                }, paddingLeft:'20px'}} placeholder='Search...' />
               
                <IconButton>
                    <SearchIcon />
                </IconButton>
            </Paper> : null }
           
        </AppBar>
    )
}

export default Header