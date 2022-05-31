import { Card, CardActionArea, CardContent, CardMedia, Typography, Rating} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Pic , H1 , CookTime , Rate } from "./Loading";



export default function RecipeCard ({id,rating,title,image,cooktime,isLoading}){
    const navigate = useNavigate();
    return(
      
   
    
    <Card className="max-w-5xl transform transition-all hover:scale-90 hover:animate-pulse"  onClick={() => navigate(`/recipes/${id}`)}>
    <CardActionArea>
    {isLoading ? (
       <Pic />
        
     
    ) : 
    <CardMedia
    className="max-h-56 "
    component="img"
    image={image}
    alt="green iguana"
  />
    }
      <CardContent className="bg-violet-700 text-white">
      {isLoading ? (
        <Typography gutterBottom variant="h5" component="div">
        <H1 />
      </Typography>
       
        
     
    ) : 
    <Typography gutterBottom variant="h5" component="div">
    {title}
  </Typography>
  
    }
      <div className=" ">
        {isLoading ? (
        <Typography  variant="caption" >
        <CookTime />
      </Typography>
       
        
     
    ) : 
    <Typography className="text-white" variant="body2" >
    Cook Time: {cooktime}  
  </Typography>
  
    }
       {isLoading ? (
        <Typography  variant="caption" >
        <Rate />
      </Typography>     
     
    ) : 
    <Typography className="flex" component="legend"> Rating: <Rating name="read-only" value={rating} readOnly  /> </Typography>
    }
        </div>
      </CardContent>
    </CardActionArea>
  </Card>
       



    )
}