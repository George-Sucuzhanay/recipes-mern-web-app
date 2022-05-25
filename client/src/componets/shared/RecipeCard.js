import { Card, CardActionArea, CardContent, CardMedia, Typography, Rating } from "@mui/material";
import { useNavigate } from "react-router-dom";



export default function RecipeCard ({id,rating,title,image,cooktime}){
    const navigate = useNavigate();
    return(
      
        <Card className="max-w-5xl transform transition-all hover:scale-90 hover:animate-pulse"  onClick={() => navigate(`/recipes/${id}`)}>
      <CardActionArea>
        <CardMedia
          className="max-h-56 "
          component="img"
          image={image}
          alt="green iguana"
        />
        <CardContent className="bg-violet-700 text-white">
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <div className=" ">
          <Typography className="text-white" variant="body2" color="text.secondary">
            Cook Time: {cooktime}  
          </Typography>
          <Typography className="flex" component="legend"> Rating: <Rating name="read-only" value={rating} readOnly  /> </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>



    )
}