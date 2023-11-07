import { Navigate } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Login from "./pages/Login";
import PostPage from "./pages/PostPage";
import Register from "./pages/Register";
import Users from "./pages/Users";


const routes = (isLoggedIn, location) => [
    {
        path: "",
        element: <MainPage />,
        children: [
            {
                path: ":postId",
                element: <PostPage />
            }
        ]
    },
    {
        path: "login",
        element: <Login />,
    },
    {
        path: "register",
        element: <Register />,
    },
    {
        path: "users",
        element: <Users />,
    },
    {
        path: "*",
        element: <Navigate to={"/"} />
    }
];

export default routes;
