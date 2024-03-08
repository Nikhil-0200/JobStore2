import Button from "../../Components/Button";
import { Link } from "react-router-dom";
import { socialMediaIconData } from "../../Constants/index";
import { FooterData } from "../../Constants/index";

const Footer = () => {
  return (
    <section className="text-white">
      <div className="flex justify-between border-b border-slight-gray pb-5">
        <h1 className="font-poppins-semibold text-3xl pb-2">
          Are you interested in boosting your career?{" "}
        </h1>
        <Button label="Login to Community" textColor="text-white" />
      </div>

      <div className="flex justify-between py-10 border-b border-slight-gray">
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

        <div className="grid grid-cols-4 gap-10">
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
    </section>
  );
};

export default Footer;
