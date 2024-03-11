import FindJobs from "../Pages/FindJobs";
import People from "../Pages/People";
import Education from "../Pages/Education";
import Blog from "../Pages/Blog";
import { Route, Routes } from "react-router-dom";
import SinglePage from "../Pages/SinglePage";

const AllRoutes = () => {
  return (
    <section>
      <Routes>
        <Route path="/" element={<FindJobs/>}/>
        <Route path="/:position" element={<SinglePage/>}/>
        <Route path="/people" element={<People/>}/>
        <Route path="/education" element={<Education/>}/>
        <Route path="/blog" element={<Blog/>}/>
      </Routes>
    </section>)
};
export default AllRoutes;
