import Button from "../../Components/Button";
import { Link } from "react-router-dom";
import { socialMediaIconData } from "../../Constants/index";
import { FooterData } from "../../Constants/index";

const Footer = () => {
  return (
    <section className="text-white">
      <div className="flex justify-between border-b border-slate-gray pb-5 max-xl:flex-col">
        <h1 className="font-poppins-semibold text-3xl pb-2">
          Are you interested in boosting your career?{" "}
        </h1>
        <Button label="Login to Community" backgroundColor="bg-coral-red" textColor="text-white" textSize="text-sm"/>
      </div>

      <div className="flex justify-between py-10 border-b border-slate-gray max-lg:flex-col-reverse">
        <div>
          <span style={{ fontFamily: "Poppins" }}>
            <Link to="/">
              <h2 className="text-3xl font-semibold">Jobstore</h2>
            </Link>
          </span>

          <div className="flex flex-col gap-3 text-lg">
            {socialMediaIconData.map((ele, index) => (
              <span
                key={index}
                className="flex font-poppins-medium text-slight-gray gap-2"
              >
                <img src={ele.socialIcon} alt="icon" />
                {ele.socialName}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-4 gap-10 max-xl:grid-cols-2 max-xl:pb-10">
          {FooterData.map((ele, index) => (
            <div key={index}>
              <h1 className="font-poppins-medium pb-5 pt-2">{ele.title}</h1>
              <div className="flex flex-col gap-2">
                {ele.links.map((ele, index)=>(
              <h1 key={index} className="font-poppins-medium text-sm text-slight-gray">{ele.name}</h1>
                ))}                
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between font-poppins-light text-[12px] py-8 max-sm:flex-col max-xl:items-center gap-3">
        <div className="flex gap-5">
          <h1>Privacy Policy</h1>
          <h1>License</h1>
          <h1>API</h1>
          <h1>@2021 All rights reserved</h1>
        </div>

        <div className="flex gap-5">
          <h1>Currency - USD</h1>
          <h1>English</h1>
        </div>
      </div>
    </section>
  );
};

export default Footer;
