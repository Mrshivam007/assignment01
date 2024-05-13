import {
    BrowserRouter as Router,
    Routes,
    Route,
    useRoutes,
  } from "react-router-dom";
import Home from "./Home";
import Mock from "./Mock";
import Loader from "./Loader";
import Disable from "./Disable";
import Taks from "./Task";

const Main = () => {
    return ( 
        <>
        <Router>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/api" element={<Mock />} />
            <Route path="/loading" element={<Loader />} />
            <Route path="/disable" element={<Disable />} />
            <Route path="/task" element={<Taks />} />
            </Routes>
        </Router>
        
        </>
     );
}
 
export default Main;