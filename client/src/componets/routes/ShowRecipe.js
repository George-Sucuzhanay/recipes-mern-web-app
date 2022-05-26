import { useState, useEffect } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Layout from '../shared/Layout'
import { Button } from '@mui/material';
import { Stack } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';  
import { Rating, Box, Grid } from '@mui/material';
import { Typography, CardActionArea} from '@mui/material';

function ShowRecipe(){
    const [recipe, setRecipe] = useState([])
    const [deleted, setDeleted] = useState(false)
    const { id } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios(`http://localhost:3000/api/recipes/${id}`)
    
            const result = response.data.recipe
            setRecipe(result)
          
          } catch (error) {
            console.error(error)
          }
        }
        fetchData()
      }, [id])
    
      useEffect(() => {
        if (!recipe) {
          return <p>Loading...</p>
        }
      }, [recipe])
    
      const destroy = () => {
       axios({
          url: `http://localhost:3000/api/recipes/${id}`,
          method: 'DELETE'
        }).then(() => setDeleted(true)).catch(console.error)
      }
    
      useEffect(() => {
        if (deleted) {
          return navigate("/recipes")
        }
      }, [deleted, navigate])


      const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
      
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));

    //   console.log(recipe.ingredients)

      
      const items = recipe.ingredients;
      console.log(items)
      return (
        <Layout>

            <Box display="flex" justifyContent="space-between">
                <NavLink to={`/recipes/${id}/edit`} >
                <Button  
                    style={{
                        borderRadius: 10,
                        backgroundColor: "#1976d2",
                        padding: "18px 36px",
                }}
                size="large" variant="contained" button>Edit</Button>
                </NavLink>
                <Button  style={{
                        borderRadius: 10,
                        backgroundColor: "#FF0000",
                        padding: "18px 36px",
                }}
                size="large" variant="contained" startIcon={<DeleteIcon />} onClick={() => destroy()}>Delete Recipe</Button>

            </Box>




            <Stack
            direction="row"
            justifyContent="center"
            alignItems="center">
            <h1 className='text-lg'>{recipe.title}</h1>

            </Stack>
        
        
                
            <Box display="flex" justifyContent="space-evenly">
                <Typography alignItems="center" component="legend" className="flex"variant="body2" color="text.primary">
                    Cook Time: {recipe.cook_time}  
                </Typography>
                <Grid
                container
                spacing={0}
                alignItems="center"
                justifyContent="space-around"
                >
                    <img src={recipe.image} alt="" width="200px"/>
                </Grid>
                
                <Typography alignItems="center" className="flex" component="legend"> Rating: <Rating name="read-only" value={recipe.rating} readOnly  /> </Typography>
            
            </Box>
    
    
       
        <p>Ingredients: {recipe.ingredients}</p>
        <p>Directions: {recipe.directions}</p>


        {/* testing tables with material UI */}
{/* 
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Dessert (100g serving)</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="item">
                {item}
              </StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> */}



  
        <NavLink to={"/recipes"}>
                <Button variant="contained" size="large">Back to all recipes</Button>
  
            </NavLink>
        
      </Layout>
      )
}
export default ShowRecipe