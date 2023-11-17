import { Box } from '@mui/system'
import React from 'react'
import { NavBar, SideBar } from '../components';
import { Toolbar } from '@mui/material';

const drawerWidth = 240;

export const JournalLayout = ( {children} ) => {
  return (
    <Box sx={{display:'flex'}} className='animate__animated animate__fadeIn animate__faster'>
        
        <NavBar drawerWidth={drawerWidth}/>

        <SideBar draweWidth={drawerWidth}/>

        <Box 
            component='main'
            sx={{ flexGrow: 1, p: 3}}
        >

            <Toolbar></Toolbar>

            { children }

        </Box>

    </Box>
  )
}
