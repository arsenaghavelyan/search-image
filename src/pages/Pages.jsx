import { RouterProvider, createBrowserRouter } from "react-router-dom"
import MainLayout from "../components/MainLayout"
import App from "../App"
import Search from "../components/Search"

export default function Pages() {
    const router = createBrowserRouter([
        {
            path:"/",
            element:<MainLayout />,
            children:[
                {
                    path:"",
                    element:<App />
                },
                {
                    path:"search",
                    element:<Search />
                }
            ]
        }
    ])
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}