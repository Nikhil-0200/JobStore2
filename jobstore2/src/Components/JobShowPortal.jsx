import Button from "./Button";

const JobShowPortal = ({title, location, type, logo }) => {
    
  return (
    <section className="flex justify-between items-center px-4 py-4">
        <div className="flex gap-10">
            <div className="w-[70px] border border-black h-[70px] rounded-xl flex items-center overflow-x-hidden">
        <img
          className="object-cover"
          src={logo}
          alt=""
        />
      </div>
      <div className="flex flex-col items-center justify-center border justify-evenly gap-2">
        <h1 className="font-poppins-semibold text-2xl">{title}</h1>
        <div className="font-poppins-medium text-slate-gray">
          <span>{location}</span>
          <span>{type}</span>
        </div>
      </div>
        </div>
      
      <div>
        <Button
          label="Apply Job"
          backgroundColor="bg-sky-blue"
          textColor="text-blue"
          textSize="text-sm"
        />{" "}
      </div>
    </section>
  );
};

export default JobShowPortal;
