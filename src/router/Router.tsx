import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../page/main/Main';
import Chatting from '../page/chatting/Chatting';
import Archive from '../page/archive/Archive';
import Login from '../page/login/Login';
import Signup from '../page/signup/Signup';
import Archiving from '../page/archiving/Archiving';
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
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/signup',
      element: <Signup />,
    },
    {
      path: '/archiving',
      element: <Archiving />,
    },
  ]);

  return <RouterProvider router={router} />;
};
export default Routers;
