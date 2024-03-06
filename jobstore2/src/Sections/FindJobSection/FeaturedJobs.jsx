import Button from "../../Components/Button";
import { FeaturesJobButtonText } from "../../Constants/index";
import JobShowPortal from "../../Components/JobShowPortal";
import { useEffect, useState } from "react";
import axios from "axios";


const FeaturedJobs = () => {


  const [data, setData] = useState([])

  // const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://linkedin-api8.p.rapidapi.com/search-jobs',
//   params: {
//     keywords: 'front end developer',
//     locationId: '92000000',
//     datePosted: 'anyTime',
//     jobType: 'fullTime',
//     experienceLevel: 'entryLevel',
//     onsiteRemote: 'remote',
//     sort: 'mostRelevant'
//   },
//   headers: {
//     'X-RapidAPI-Key': 'bba5e88c22msh0f99678a618b83ep1abc21jsn3b792ac36709',
//     'X-RapidAPI-Host': 'linkedin-api8.p.rapidapi.com'
//   }
// };

// async function fetchData(){
//     try {
//         const response = await axios.request(options);
//         // console.log(response.data.data);
setData(response.data.data)
    } catch (error) {
        console.error(error);
    }
}

useEffect(()=>{
    fetchData()
}, [])




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
        logo={ele.company.logo}
        key={ele.id}
        />
        ))}
      </div>
    </section>
  );
};

export default FeaturedJobs;
