import { BrowserRouter,Routes,Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Photographyblog from "./pages/Photography/Photographyblog";
import Singlestorygallery from "./pages/Singlestorygallery/Singlestorygallery";
import './App.css'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path = '/' element = {<Home/>}>
      
      </Route>
      <Route path = '/photography' element = {<Photographyblog/>}/>
      <Route path = '/singlestorygallery' element = {<Singlestorygallery/>}/>
      
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
