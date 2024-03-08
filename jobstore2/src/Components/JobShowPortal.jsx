import Button from "./Button";

const JobShowPortal = ({position, companyLogo, state, place}) => {
    
  return (
    <section className="flex justify-between items-center px-4 py-4">
        <div className="flex gap-10 max-w-[90%]">
            <div className="w-[70px] border border-black h-[70px] rounded-xl flex items-center overflow-x-hidden">
        <img
          className="object-cover"
          src={companyLogo}
          alt=""
        />
      </div>
      <div className="flex flex-col border justify-evenly gap-2">
        <h1 className="font-poppins-semibold text-2xl">{position}</h1>
        <div className="font-poppins-medium text-slate-gray">
          <span>{state}</span>
          <span>{place}</span>
        </div>
      </div>
        </div>
      
      <div>
        <Button
          label="Apply Job"
          backgroundColor="bg-sky-blue"
          textColor="text-blue"
          textSize="text-sm"
        />
      </div>
    </section>
  );
};

export default JobShowPortal;
