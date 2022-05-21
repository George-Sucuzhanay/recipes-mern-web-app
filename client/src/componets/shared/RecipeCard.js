import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";



export default function RecipeCard ({id,rating,title,image,cooktime}){
    const navigate = useNavigate();
    return(
        <Card sx={{ maxWidth: 345 }} onClick={() => navigate(`/recipes/${id}`)}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140px"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Cook Time: {cooktime}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>



    )
}