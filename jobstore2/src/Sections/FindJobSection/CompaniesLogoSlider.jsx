import {CompaniesLogo} from "../../Constants/index"
import Marquee from "react-fast-marquee";


const CompaniesLogoSlider = () => {
  console.log(CompaniesLogo);

  return (

    
    <section className="max-container border-t-[1.5px] flex justify-center border-b-[1.5px] py-4 border-slight-gray relative">
      <span className=" font-poppins-medium text-lg absolute z-10 top-[-15px] bg-white px-3">Trusted by Job holders from</span>
      <div className=" h-28 whitespace-nowrap flex flex-row-reverse items-center gap-5 overflow-x-hidden">
          <Marquee className="flex gap-20 ">
            <div className="flex gap-20">
              {CompaniesLogo.map((ele, index)=>(
                <div key={index} className="flex items-center">
              <img className="object-cover flex items-center" src={ele.Logo} alt="" width={100} />
                </div>
              ))}
            </div>
              
           
         </Marquee>
      </div>
    </section>
  )
}

export default CompaniesLogoSlider