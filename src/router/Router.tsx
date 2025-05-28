import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../page/main/Main';
import Chatting from '../page/chatting/Chatting';
import Archive from '../page/archive/Archive';
const Routers = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
    },
    {
      path: '/chatting',
      element: <Chatting />,
    },
    {
      path: '/archive',
      element: <Archive />,
    },
  ]);

  return <RouterProvider router={router} />;
};
export default Routers;
