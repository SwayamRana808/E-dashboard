import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import { BrowserRouter,Routes,Route, RouterProvider,createBrowserRouter, Outlet } from 'react-router-dom';
function App() {
  // const appRoute=createBrowserRouter([
  //   {
  //     path:"/",
  //     element:<Nav/>,
  //     children:[
  //       {
  //         path:"/",
  //         element :<h1>hello this is home</h1>
  //       },
  //       {
  //         path:"/add",
  //         element :<h1>hello this is about</h1>
  //       },
  //       {
  //         path:"/profile",
  //         element:<h1>this is profile</h1>
  //       },
  //       {
  //         path:"/update",
  //         element:<h1>this is update</h1>
  //       },
  //       {
  //         path:"/logout",
  //         element:<h1>this is logout</h1>
  //       }

  //     ]
  //   }
  
  // ])
  return (
   
    
    <div className="App">
      <h1>E-DashBoard</h1>
      {/* <RouterProvider router={appRoute}/> */}
    <BrowserRouter>
       <Nav />
      
       <Routes>
         <Route path='/' element={<h1>Products</h1>}></Route>
         <Route path='/add' element={<h1>add product component</h1>}></Route>
         <Route path='/update' element={<h1>update component</h1>}></Route>
         <Route path='/logout' element={<h1>logout</h1>}></Route>
         <Route path='/profile' element={<h1>Profile</h1>}></Route>
       </Routes>
       </BrowserRouter> 
        
    </div>
 
  );
}

export default App;
