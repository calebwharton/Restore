import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import Home from "@pages/Home";
import Login from "@pages/Login";
import Store from "@pages/Store";
import SignUp from "@pages/SignUp";
import About from "@pages/About";
import Profile from "@pages/Profile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/signup",
        element: <SignUp />,
    },
    {
        path: "/store",
        element: <Store />,
    },
    {
        path: "/profile",
        element: <Profile />,
    },
    {
        path: "/about",
        element: <About />,
    },
]);

export default function App() {
    const [queryClient] = useState(() => new QueryClient());
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    );
}
