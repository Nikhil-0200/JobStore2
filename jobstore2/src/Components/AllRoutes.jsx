import FindJobs from "../Pages/FindJobs";
import People from "../Pages/People";
import Education from "../Pages/Education";
import Blog from "../Pages/Blog";
import { Route, Routes } from "react-router-dom";
import SinglePage from "../Pages/SinglePage";
import PrivateRoute from './PrivateRoute'

const AllRoutes = () => {
  return (
    <section>
      <Routes>
        <Route path="/" element={<FindJobs/>}/>
        
          <Route path="/:position" element={
          <PrivateRoute>
            <SinglePage/>
          </PrivateRoute>          
          }/>

        <Route path="/people" element={ <PrivateRoute><People/> </PrivateRoute> }/>
        <Route path="/education" element={ <PrivateRoute><Education/> </PrivateRoute> }/>
        <Route path="/blog" element={ <PrivateRoute><Blog/> </PrivateRoute> }/>
      </Routes>
    </section>)
};
export default AllRoutes;
