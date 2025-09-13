import {RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
  HomeLayout,
  Landing,
  Error,
  Products,
  SingleProduct,
  About,
  Terms,
  Privacy,
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
    {path:"terms",element:<Terms/>,errorElement:<ErrorElement/>},
    {path:"privacy",element:<Privacy/>,errorElement:<ErrorElement/>},
  ]},
])

function App() {
  
  return (
<RouterProvider router={router}/>
  );
}
export default App;
