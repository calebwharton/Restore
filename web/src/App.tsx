import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState } from 'react';
import Home from '@pages/Home';
import Form from '@pages/Form';
import AboutUs from '@pages/AboutUs';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/sign-in',
    element: <Form />
  },
  {
    path: '/about-us',
    element: <AboutUs />
  }
]);

export default function App() {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
