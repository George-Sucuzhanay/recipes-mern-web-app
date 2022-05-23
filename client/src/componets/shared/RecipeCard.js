import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";



export default function RecipeCard ({id,rating,title,image,cooktime}){
    const navigate = useNavigate();
    return(
        <Card  sx={{ maxWidth: 345 }} onClick={() => navigate(`/recipes/${id}`)}>
      <CardActionArea>
        <CardMedia
          className="max-h-56"
          component="img"
          image={image}
          alt="green iguana"
        />
        <CardContent className="bg-violet-700 text-white">
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography className="text-white" variant="body2" color="text.secondary">
            Cook Time: {cooktime}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>



    )
}