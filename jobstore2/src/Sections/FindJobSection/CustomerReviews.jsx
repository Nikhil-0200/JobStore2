import { useState } from "react"
import { CustomerReviewsData } from "../../Constants"
import { nextArrow } from "../../assets/Icons";
import { PreviousArrow } from "../../assets/Icons";
import { invertedComma } from "../../assets/Icons";

const CustomerReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const incIndex = () =>{
    setCurrentIndex(currentIndex > 6 ? 0 : currentIndex +1)
  }

  const decIndex = () =>{
    setCurrentIndex(currentIndex < 0 ? CustomerReviews.length + 1: currentIndex - 1)
  }

  return (
    <section className="max-container flex justify-between p-10 text-white items-end">
      {CustomerReviewsData.map((ele, index)=>(
        <div key={index} className={` ${index === currentIndex? "visible" : "hidden"} flex gap-6 w-[90%]`}>
        <div className="border-[6px] border-coral-red rounded-full overflow-hidden w-[250px] h-[300px]">
          <img className="w-[100%] h-[100%] object-cover object-center" src={ele.img} alt="CustomerImage" width={100} height={100}/>
        </div>

        <div className=" flex flex-col justify-center w-[90%] px-5">
          <span><img src={invertedComma} alt="invertedComma" /></span>
          <h1 className="font-poppins-semibold text-3xl w-[100%] pb-10">{ele.para}</h1>
          <h1 className="font-poppins-medium text-lg pb-2">{ele.Name}</h1>
          <h1 className="font-poppins-medium text-sm text-slate-gray">{ele.Des}</h1>
        </div>
      </div>
          ))}
      
      <div id="buttonDiv" className="flex flex-row-reverse gap-3">
        <div onClick={incIndex}><span ><img className="bg-black rounded-full p-3" src={nextArrow} alt="NextArrow" width={40}/></span></div>
        <div onClick={decIndex}><span><img className="bg-black rounded-full p-3" src={PreviousArrow} alt="Prev. Arrow"  width={40}/></span></div>
      </div>
    </section>
  )
}

export default CustomerReviews