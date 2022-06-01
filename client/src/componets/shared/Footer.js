import { NavLink } from "react-router-dom";

export default function Footer () {
    return (
        <footer className="h-10 bottom-0 bg-violet-700 ">
        <>
            <div className=" bg-violet-700  ">
                <div className="mx-auto container pt-5 lg:pt-2 flex flex-col items-center justify-center">
                    <div className="lg:hidden" >
                        <img className='max-h-28' src='https://i.postimg.cc/XJQCw3Wn/logo.png' alt=""/>
                    </div>
                    <div className="text-white flex flex-col md:items-center f-f-l pt-3 ">
                        <h1 className="text-2xl font-black flex justify-center">Get Cooking!</h1>
                     
                        <div className="my-6 text-base">
                            <ul className="md:flex items-center">
                            <NavLink to="/recipes"> <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">Recipes</li></NavLink>
                               <NavLink to="/random"> <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">Random</li></NavLink>
                               <NavLink to="/search"> <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">Search</li></NavLink>
                               <NavLink to="/create-recipe"> <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">Add Recipe</li></NavLink>
                            </ul>
                        </div>
                        <div className="text-sm text-color mb-10 f-f-l">
                        <p>© Copyright {new Date().getFullYear()}. All Rights Reserved.</p>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </>
        </footer>
    )

}