import Button from "./Button";
import { useNavigate } from "react-router-dom";

const JobShowPortal = ({position, companyLogo, state, place}) => {
const navigate = useNavigate()
    
  return (
    <section className="xl:flex xl:justify-between xl:items-center xl:px-4 py-4 border-[1.5px] border-slight-gray rounded-xl items-center">
        <div className="flex gap-4 xl:gap-10 xl:max-w-[90%] max-xl:flex-col max-xl:items-center">
            <div className="w-[70px] border border-black h-[70px] rounded-xl flex items-center overflow-x-hidden">
        <img
          className="object-cover w-[100%]"
          src={companyLogo}
          alt="Logo"
        />
      </div>
      <div className="flex flex-col justify-evenly gap-2 max-xl:w-full max-xl:items-center">
        <h1 className="font-poppins-semibold xl:text-2xl max-xl:text-center">{position}</h1>
        <div className="font-poppins-medium text-slate-gray max-xl:text-center">
          <span>{state}</span>
          <span>, {place}</span>
        </div>
      </div>
        </div>
      
      <div className="flex max-xl:justify-center pt-6">
        <Button
          label="Apply Job"
          backgroundColor="bg-sky-blue"
          textColor="text-blue"
          textSize="text-sm"
          onClick={()=>navigate(`/${position}`)}
        />
      </div>
    </section>
  );
};

export default JobShowPortal;
