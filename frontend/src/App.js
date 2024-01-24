import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    
    <div className="App">
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
