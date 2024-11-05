import CRM from "@/Pages/CRM";
import {  useRoutes } from "react-router-dom";


const Router = ()=>{
    return useRoutes([
        {
            path: "/", 
            element:<> </>
        },
        {
            path:"/CRM",
            element:<CRM/>
        }
    ])
}

export default Router;
