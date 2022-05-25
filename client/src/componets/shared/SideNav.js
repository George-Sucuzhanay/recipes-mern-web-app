import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText,  Menu, MenuItem, styled, Toolbar, } from '@mui/material';
import { useState } from 'react';
import {NavLink} from "react-router-dom"
import MenuIcon from '@mui/icons-material/Menu';
import { AddCircle, Home, MenuBook, Search } from '@mui/icons-material';


const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    paddingBottom:"10"
})



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
        <Box className='bg-violet-700 text-white lg:hidden'>
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
        <MenuItem className="hover:bg-cyan-400" ><NavLink to="/">Home</NavLink></MenuItem>
        <MenuItem className="hover:bg-cyan-400" ><NavLink to="/recipes">Recipes</NavLink></MenuItem>
        <MenuItem className="hover:bg-cyan-400" ><NavLink to="/create-recipe">Add Recipes</NavLink></MenuItem>
        <MenuItem className="hover:bg-cyan-400" ><NavLink to="/search">Search</NavLink></MenuItem>
       
      </Menu>
      </Box>


{/* Desktop View */}

        <Box flex={1} p={2} className="hidden lg:block border-r-4 "   >
            <Box position="fixed">
                <div className='grid mb-10 justify-center'>
                    
                    <h1 className=' text-3xl font-bold flex justify-center'>Name of App</h1>
                    <img className='max-h-40' src='https://i.postimg.cc/XJQCw3Wn/logo.png' />
                </div>
                
               

            <List >
              
                <ListItem disablePadding>
                <NavLink to="/">
                    <ListItemButton className='pr-20 hover:bg-cyan-400' >
                    <ListItemIcon>
                        <Home />
                    </ListItemIcon>
                    <ListItemText primary="Homepage" />
                    </ListItemButton>
                    </NavLink>
                </ListItem>
                <ListItem disablePadding>
                <NavLink to="/recipes">
                    <ListItemButton className='pr-24 hover:bg-cyan-400'>     
                    <ListItemIcon>
                        <MenuBook />
                    </ListItemIcon>               
                    <ListItemText primary="Recipes" />                    
                    </ListItemButton>
                    </NavLink>
                </ListItem>
                <ListItem disablePadding>
                    <NavLink to="/create-recipe">
                    <ListItemButton className='pr-20 hover:bg-cyan-400' >
                    <ListItemIcon>
                        <AddCircle />
                    </ListItemIcon>
                    <ListItemText primary="Add Recipe" />
                    </ListItemButton>
                    </NavLink>
                </ListItem>
                <ListItem disablePadding>
                    <NavLink to="/search">
                    <ListItemButton className='pr-20 hover:bg-cyan-400' >
                    <ListItemIcon>
                        <Search />
                    </ListItemIcon>
                    <ListItemText primary="search" />
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