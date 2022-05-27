import { Skeleton } from "@mui/material";

export function Pic (){
    return(
        <Skeleton
        variant="rectangle"
        animation="wave"
        className="h-56"
         />
    )
}
export function H1 (){
    return(
        <Skeleton
        variant="h3"
        animation="wave"
         />
    )
}
export function CookTime (){
    return(
        <Skeleton
        variant="text"
        animation="wave"
        width={100}
         />
    )
}
export function Rate (){
    return(
        <Skeleton
        variant="text"
        animation="wave"
        width={250}
         />
    )
}

