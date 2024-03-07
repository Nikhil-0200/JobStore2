import Button from "../../Components/Button";
import { FeaturesJobButtonText } from "../../Constants/index";
import JobShowPortal from "../../Components/JobShowPortal";
import { useEffect, useState } from "react";
import axios from "axios";


const FeaturedJobs = ({search}) => {
const [data, setData] = useState([])

console.log({search})

async function fetchData(){
  try {
    let res = await axios({
      method: "GET",
      baseURL: `https://script.google.com/macros/s/AKfycbzKxW9UUjsXvkNkbep6IpizHsSGAaBLij8nKK7XuQXBLoTUI5nSQS_25i3naBTfobi7Hg/exec?position=JavaScript`,
    })
    console.log(res.data.data)
    setData(res.data.data)
  } catch (error) {
    console.log("Error");
  }
}

useEffect(()=>{
  fetchData()
}, [search])



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
        {data.map((ele)=>(
        <JobShowPortal
        {...ele}
        key={ele.id}
        />
        ))}
      </div>
    </section>
  );
};

export default FeaturedJobs;
