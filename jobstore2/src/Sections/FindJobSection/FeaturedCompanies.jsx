import axios from "axios";
import { useEffect, useState } from "react";
import CompanyCard from "../../Components/CompanyCard";

const FeaturedCompanies = () => {
  const [data, setData] = useState([])

  async function fetchCompanyData(){
    try {
      let res = await axios({
        method: "get",
        baseURL: `https://script.google.com/macros/s/AKfycbzKxW9UUjsXvkNkbep6IpizHsSGAaBLij8nKK7XuQXBLoTUI5nSQS_25i3naBTfobi7Hg/exec`
      })
      setData(res.data.data)
    } catch (error) {
      console.log("Error");
    }
  }

  useEffect(()=>{
    fetchCompanyData()
  }, [])

  return (
    <section className="max-container text-center">
      <div className="flex flex-col content-center">
        <h1 className="font-poppins-extrabold text-3.5xl pb-2">
          Featured companies actively hiring
        </h1>
        <div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedCompanies