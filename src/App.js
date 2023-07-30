import { BrowserRouter,Routes,Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Photographyblog from "./pages/Photography/Photographyblog";
import './App.css'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path = '/' element = {<Home/>}>
      
      </Route>
      <Route path = '/photography' element = {<Photographyblog/>}/>
      
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
