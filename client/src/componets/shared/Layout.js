import { Box, Stack } from "@mui/material";
import Footer from "./Footer";
import RouteView from "./RouteView";
import SideNav from "./SideNav";

export default function Layout (props) {
    return(
        <>
    { /* desktop view */}
     
        <Box className="hidden lg:block ">
         <Stack direction="row" spacing={2} justifyContent="space-between">
       
        <SideNav />
          
        <RouteView className="hidden lg:block ">
            {props.children}
        </RouteView>
        
        </Stack>
        

        <Footer />
        
    </Box>

    {/* mobile view   */}
        <Box className=" lg:hidden ">
        
       
        <SideNav />
          
        
            {props.children}
     
    
        

        <Footer />
        
    </Box>
    </>

    )
}