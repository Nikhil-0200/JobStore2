import Button from "../../Components/Button";
import { FeaturesJobButtonText } from "../../Constants/index";
import JobShowPortal from "../../Components/JobShowPortal";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import SearchContext from "../../Context/SearchContext";


const FeaturedJobs = () => {
  const [displayLimit, setDisplayLimit] = useState(5);
  const {search} = useContext(SearchContext)
const [data, setData] = useState([])

console.log("Data recieved", search)

async function fetchData(){
  try {
    let res = await axios({
      method: "GET",
      baseURL: `https://script.google.com/macros/s/AKfycbzKxW9UUjsXvkNkbep6IpizHsSGAaBLij8nKK7XuQXBLoTUI5nSQS_25i3naBTfobi7Hg/exec?position=${search.searchWord}`,
    })
    console.log(res.data.data)
    setData(res.data.data)
  } catch (error) {
    console.log("Error");
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
        <h1 className="font-poppins-extrabold text-3.5xl pb-2">
          Featured jobs
        </h1>
        <div className="flex justify-between">
          <p className="font-poppins-medium text-sm text-slate-gray flex items-center">
            Know your worth and find the job that qualify your life
          </p>

          <div className="flex gap-5">
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

      <div className="border-[1.5px] border-slight-gray rounded-lg my-10">
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
              />
            
          </div>
        )}
        
    </section>
  );
};

export default FeaturedJobs;
