import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import Home from "@pages/Home";
import Login from "@pages/Login";
import Events from "@pages/Events";
import SignUp from "@pages/SignUp";
import About from "@pages/About";
import Profile from "@pages/Profile";
import Social from "@pages/Social";
import CreateEvent from "@pages/CreateEvent";

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
        path: "/events",
        element: <Events />,
    },
    {
        path: "/profile",
        element: <Profile />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/social",
        element: <Social />,
    },

    {
        path: "/createevent",
        element: <CreateEvent />,
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
