import {RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
  HomeLayout,
  Landing,
  Error,
  Products,
  SingleProduct,
  About,
} from './pages';
import { ErrorElement } from './components';


const router = createBrowserRouter([
  {path:"/", element:<HomeLayout/>,
  errorElement:<Error/>,
  children:[
    {index:true, element:<Landing/>, errorElement:<ErrorElement/>},
    {path:"products",element:<Products/>,errorElement:<ErrorElement/> },
    {path:"product/:id",element:<SingleProduct/>,errorElement:<ErrorElement/>},
    {path:"about",element:<About/>,errorElement:<ErrorElement/>},
  ]},
])

function App() {
  
  return (
<RouterProvider router={router}/>
  );
}
export default App;