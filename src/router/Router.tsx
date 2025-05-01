import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../page/main/Main';
const Routers = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
    },
  ]);

  return <RouterProvider router={router} />;
};
export default Routers;
