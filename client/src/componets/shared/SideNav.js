import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch, InputBase, Menu, MenuItem, styled, Toolbar, Avatar, Typography } from '@mui/material';
import { useState } from 'react';
import {NavLink} from "react-router-dom"
import MenuIcon from '@mui/icons-material/Menu';

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    paddingBottom:"10"
})

const Search = styled('div')(({theme})=>({
    backgroundColor: 'white',
    padding:"0px 10px",
    borderRadius: theme.shape.borderRadius,
    width: '40%'
}))

const UserBox = styled(Box)(({theme})=>({
    display: "flex",
    alignItems: "center",
    gap:'10px',
}))


export default function SideNav () {
    const [open,setOpen] = useState(false)




    return(
        <>
        {/* MObile View */}
        <Box className='bg-amber-100 lg:hidden'>
        <StyledToolbar  > 
       
                 {/* <Toolbar variant="h6" sx={{display:{xs:"none",sm:"block"}}}> LAMA DEV </Toolbar> 
                <MenuBookRounde sx={{display:{sm:"block",md:"none"}}}/> */}
                {/* <Search style={{border:"1px solid black"}}> <InputBase placeholder="search" />    </Search> */}
                
                  
                   
               <h1 className='text-xl font-bold'>Name of app</h1>
               

                 <UserBox className='lg:hidden' onClick={(e)=>setOpen(true)}>
                 <MenuIcon size="large"/>
                </UserBox> 

            </StyledToolbar>

            <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e)=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem ><NavLink to="/">Home</NavLink></MenuItem>
        <MenuItem ><NavLink to="/recipes">Recipes</NavLink></MenuItem>
        <MenuItem ><NavLink to="/create-recipe">Add Recipes</NavLink></MenuItem>
       
      </Menu>
      </Box>


{/* Desktop View */}

        <Box flex={1} p={2} className="hidden lg:block border-r-4 "   >
            <Box position="fixed">
                <div style={{marginBottom:20}}>
                    <h1 className='mb-20 text-3xl font-bold flex justify-center'>Name of App</h1>
                </div>
            <List >
              
                <ListItem disablePadding>
                <NavLink to="/">
                    <ListItemButton className='pr-20' >
                    <ListItemText primary="Homepage" />
                    </ListItemButton>
                    </NavLink>
                </ListItem>
                <ListItem disablePadding>
                <NavLink to="/recipes">
                    <ListItemButton className='pr-24 '>                    
                    <ListItemText primary="Recipes" />                    
                    </ListItemButton>
                    </NavLink>
                </ListItem>
                <ListItem disablePadding>
                    <NavLink to="/create-recipe">
                    <ListItemButton className='pr-20' >
                    <ListItemText primary="Add Recipe" />
                    </ListItemButton>
                    </NavLink>
                </ListItem>
              
                
                {/* <ListItem disablePadding>
                    <ListItemButton componet='a' href='#home'>
                    
                    <Switch onChange={e=>setMode(mode === 'light' ? 'dark':'light' )}/>
                    </ListItemButton>
                </ListItem> */}
            </List>
            </Box>
        </Box>

        </>

    )
} 