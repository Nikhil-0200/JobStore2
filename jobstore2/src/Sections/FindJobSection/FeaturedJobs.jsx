import Button from "../../Components/Button";
import { FeaturesJobButtonText } from "../../Constants/index";
import JobShowPortal from "../../Components/JobShowPortal";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import SearchContext from "../../Context/SearchContext";
import Loading from "../../Components/Loading";


const FeaturedJobs = () => {
  const [loading, setLoading] = useState(false)
  const [displayLimit, setDisplayLimit] = useState(5);
  const {search} = useContext(SearchContext)
const [data, setData] = useState([])

async function fetchData(){
  setLoading(true)
  try {
    let res = await axios({
      method: "GET",
      baseURL: `https://script.google.com/macros/s/AKfycbzKxW9UUjsXvkNkbep6IpizHsSGAaBLij8nKK7XuQXBLoTUI5nSQS_25i3naBTfobi7Hg/exec?position=${search.searchWord}`,
    })
    setLoading(false)
    setData(res.data.data)
    console.log(res.data.data);
  } catch (error) {
    console.log("Error");
    setLoading(false)
  }
}

useEffect(()=>{
  const debounce = setTimeout(()=>{
    fetchData()
  }, 1000)

  return ()=>{
    clearTimeout(debounce)
  }

}, [search.searchWord])


const handleSeeMore = ()=>{
  setDisplayLimit(displayLimit + 5)
}


  return (
    <section className="max-container">
      <div className="flex flex-col content-center">
        <h1 className="font-poppins-extrabold text-3xl xl:text-3.5xl pb-2 text-center xl:text-left ">
          Featured jobs
        </h1>
        <div className="flex xl:justify-between xl:flex-row flex-col ">
          <p className="font-poppins-medium text-sm text-slate-gray flex items-center max-xl:m-auto max-xl:pb-5">
            Know your worth and find the job that qualify your life
          </p>

          <div className="flex gap-5 max-xl:m-auto">
            {FeaturesJobButtonText.map((ele, index) => (
              <Button
                key={index}
                label={ele.ButtonText}
                backgroundColor="bg-button-gray"
                textSize="text-sm"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="  rounded-lg my-10 relative flex flex-col gap-5">
        <div className="flex justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2">
        {loading && <Loading/>}
        </div>
        {data.slice(0, displayLimit).map((ele)=>(
        <JobShowPortal
        {...ele}
        key={ele.id}
        />
        ))}
      </div>

      {data.length > displayLimit && (
          <div className="flex justify-center">
            
              <Button
                onClick={handleSeeMore}
                label="See More Jobs"
                backgroundColor="bg-coral-red"
                textColor="text-white"
                textSize="text-sm"
              />
            
          </div>
        )}
        
    </section>
  );
};

export default FeaturedJobs;
