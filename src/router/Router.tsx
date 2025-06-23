import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../page/main/Main';
import Chatting from '../page/chatting/Chatting';
import Archive from '../page/archive/Archive';
import Login from '../page/login/Login';
import Signup from '../page/signup/Signup';
import Archiving from '../page/archiving/Archiving';
import Category from '../page/category/Category';
const Routers = () => {
  const router = createBrowserRouter([
    {
      path: '/main',
      element: <Main />,
    },
    {
      path: '/chatting/:book_id',
      element: <Chatting />,
    },
    {
      path: '/archive/:book_id',
      element: <Archive />,
    },
    {
      path: '/',
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
    {
      path: '/category',
      element: <Category />,
    },
  ]);

  return <RouterProvider router={router} />;
};
export default Routers;
