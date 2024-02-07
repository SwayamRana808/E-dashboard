
import './App.css';
import Nav from './components/Nav';
import SignUp from './components/SignUp';
import Privatecomponent from './components/Privatecomponent.js';
import { BrowserRouter,Routes,Route, RouterProvider,createBrowserRouter, Outlet } from 'react-router-dom';
import Login from './components/Login.js';
function App() {
 
  return (
   
    
    <div className="App">
      
      {/* <RouterProvider router={appRoute}/> */}
    <BrowserRouter>
       <Nav />
       <p className='text-[40px] text-center heading text-white'>E-DashBoard</p>
       <Routes>
        <Route element={<Privatecomponent/>}>
            <Route path='/' element={<h1>Products</h1>}></Route>
            <Route path='/add' element={<h1>add product component</h1>}></Route>
            <Route path='/update' element={<h1>update component</h1>}></Route>
            <Route path='/profile' element={<h1>Profile</h1>}> </Route>
         </Route>
         <Route path='/signup' element={<SignUp/>}> </Route>
         <Route path='/login' element={<Login/>}></Route>
       </Routes>
       </BrowserRouter> 
       
    </div>
 
  );
}

export default App;
