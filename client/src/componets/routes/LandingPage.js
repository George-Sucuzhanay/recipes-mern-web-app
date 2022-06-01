import { AddCircleOutline, MenuBook, QuestionMark, Search } from "@mui/icons-material"
import { Typography } from "@mui/material"
import { NavLink, } from "react-router-dom"


export default function LandingPage() {


    return(
        <div className="fixed top-0 right-0 left-0 bottom-0 overflow-auto " 
        style={{
          position: 'fixed', 
          top:'0',
          right:'0',
          left:'0',
          bottom:'0',
          overflow: 'auto',  
          flexDirection: 'row',
          backgroundImage:' url("https://i.postimg.cc/PJJWYvtH/Screen-Shot-2022-05-25-at-10-33-33-PM.png")',
          backgroundSize:'cover'
        }}
        
        >
        <section className="mx-auto container py-9 ">
          <div className="flex justify-center items-center flex-col">
            <div className=" flex flex-wrap justify-center  lg:text-6xl md:text-5xl text-4xl font-black leading-10 text-center text-gray-800 dark:text-white ">

            <img className='max-h-40' src='https://i.postimg.cc/XJQCw3Wn/logo.png' alt="" />
              <h1 className='flex items-center px-2'>Recipe Vault</h1>

            </div>
            <div className='pb-20'>
            <Typography variant="body2"className='flex text-white font-semibold italic'>
               Archive Your Cooking Adventure</Typography>
            </div>

            <div className="grid lg:grid-cols-2 md:grid-cols-2 justify-center items-center xl:gap-y-16 gap-y-20 gap-x-16 lg:gap-x-20 xl:gap-x-0 lg:px-10 xl:px-0 divide-y md:divide-y-0  pt-0 backdrop-blur-sm">
              <NavLink to="/search">
              <div className=" cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col lg:transform lg:transition-all lg:hover:scale-110 ">
                <div className="mb-6">
              <Search className="fill-emerald-500 text-5xl" />
                </div>
                <div className="text-white text-2xl font-semibold text-center">
                  <h2>Search</h2>
                </div>
                <div className="text-gray-300 mt-2 text-lg text-center ">
                  <p>Know what you are looking for, type the name of the recipe go straight to it with out search</p>
                </div>
              </div>
              </NavLink>
              <NavLink to="/recipes">
              <div  className=" cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col lg:transform lg:transition-all lg:hover:scale-110 ">
                <div className="mb-6">
                <MenuBook className="fill-emerald-500 text-5xl" />
                </div>
                <div className="text-white text-2xl font-semibold text-center">
                  <h2>View All Your Recipes</h2>
                </div>
                <div className="text-gray-300 mt-2 text-lg text-center">
                  <p>Want to browse your options  then this is for you</p>
                </div>
              </div>
              </NavLink>
              <NavLink to="/random">
              <div on className=" cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col lg:transform lg:transition-all lg:hover:scale-110 ">
                <div className="mb-6">
                <QuestionMark className="fill-emerald-500 text-5xl" />
                <QuestionMark className="fill-emerald-500 text-5xl" />
                <QuestionMark className="fill-emerald-500 text-5xl" />
                </div>
                <div className="text-white text-2xl font-semibold text-center">
                  <h2>Get A Random Recipe</h2>
                </div>
                <div className="text-gray-300 mt-2 text-lg text-center">
                  <p>Don't know what to make, come let us choose a recipe for you</p>
                </div>
              </div>
              </NavLink>
              <NavLink to="/create-recipe">
              <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col lg:transform lg:transition-all lg:hover:scale-110 ">
                <div className="mb-6">
                <AddCircleOutline className="fill-emerald-500 text-5xl" />
                </div>
                <div className="text-white text-2xl font-semibold text-center">
                  <h2>Add Your Own Recipe</h2>
                </div>
                <div className="text-gray-300 mt-2 text-lg text-center">
                  <p>Found a recipe you like and you want to save for a later date</p>
                </div>
              </div>
              </NavLink>
            </div>
          </div>
        </section>
      </div>
    )
}
