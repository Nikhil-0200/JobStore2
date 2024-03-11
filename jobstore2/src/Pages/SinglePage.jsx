import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SinglePage = () => {
  const navigate = useNavigate();
  const { position } = useParams();
  const [companyData, setcompanyData] = useState([]);

  async function fetchJob() {
    try {
      let res = await axios({
        method: "GET",
        baseURL: `https://script.google.com/macros/s/AKfycbzKxW9UUjsXvkNkbep6IpizHsSGAaBLij8nKK7XuQXBLoTUI5nSQS_25i3naBTfobi7Hg/exec?position=${position}`,
      });
      console.log(res.data.data);
      setcompanyData(res.data.data);
    } catch (error) {
      console.log("Error");
    }
  }

  useEffect(() => {
    fetchJob();
  }, []);

  return (
    <section>
      {companyData.map((ele, index) => (
        <section
          key={index}
          className="items-center flex flex-col justify-center"
        >
          <div className="py-10">
            <h1 className="font-poppins-extrabold text-3xl xl:text-2xl pb-2 text-center xl:text-left ">
              {ele.position}
            </h1>

            <div className="flex xl:justify-between xl:flex-row flex-col ">
              <p className="font-poppins-medium text-xl text-slate-gray flex items-center max-xl:m-auto max-xl:pb-5">
                {ele.companyName}
              </p>
            </div>
          </div>

          <div className="flex gap-4 xl:gap-10 xl:max-w-[90%] max-xl:flex-col max-xl:items-center">
            <div className="w-[70px] border border-black h-[70px] rounded-xl flex items-center overflow-x-hidden">
              <img
                className="object-cover w-[100%]"
                src={ele.companyLogo}
                alt="Logo"
              />
            </div>

            <div className="flex flex-col justify-evenly gap-2 max-xl:w-full max-xl:items-center">
              {ele.companyLink && (
                <div>
                    <label>Company Link: </label>
                <Link
                  to={`https://www.linkedin.com/in/${ele.companyLink}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h1 className="font-poppins-semibold xl:text-xl max-xl:text-center">
                    {ele.companyLink}
                  </h1>
                </Link> 
                </div>
               
              )}

              {ele.team && (
                <div>
                    <label>Team Link: </label>
                   <a href={ele.companyLink}>
                  <h1 className="font-poppins-semibold xl:text-xl max-xl:text-center">
                    {ele.team}
                  </h1>
                </a> 
                </div>
                
              )}

              <div className="font-poppins-medium text-slate-gray max-xl:text-center flex flex-col">
                <span>State: {ele.state}</span>
                <span>Type: {ele.place}</span>
              </div>
            </div>
          </div>
        </section>
      ))}
    </section>
  );
};

export default SinglePage;
