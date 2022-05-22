import { Box } from "@mui/material";


export default function RouteView(props){

    return(
       
       
        <Box  flex={4} p={2}  className="flex flex-row flex-wrap justify-center items-center lg:grid lg:gap-2">
               
               {props.children}
      
        </Box>
       
   
    )
}