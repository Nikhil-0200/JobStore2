import { useContext, useState } from "react"
import { SEARCH, locationIcon } from "../../assets/Icons/index.js"
import { GROUPIMAGE, GROUPIMAGE2 } from "../../assets/Images"
import SearchContext from "../../Context/SearchContext.jsx"


const Hero = () => {
const [data, setData] = useState({
  searchedWord: ""
})

  const {inputData} = useContext(SearchContext)

  function change(event){
    const newData = {
      ...data,
      [event.target.name]: event.target.value
    }
    setData(newData)
  }

  function submit(){
    inputData(data.searchedWord)
  }

  return (
    <section className="max-container">
      <div className="flex flex-col items-center padding-t relative w-full lg:padding-x sm:px-5 px-2">
        <img className="absolute left-0 bottom-0 max-lg:hidden max-xl:w-72" src={GROUPIMAGE} alt="groupImage " height={10} width={340} />
        <img className="absolute right-0 bottom-0 max-lg:hidden max-xl:w-72" src={GROUPIMAGE2} alt="groupImage" height={10} width={340} />
      <h1 style={{fontFamily:"Poppins"}} className=" max-md:text-[60px] md:text-[80px] text-sm max-sm:px-0   font-semibold lg:w-[65%] pb-4 leading-[90px] text-center text-white z-10 ">Find a dream jobs in New Castle
    </h1>
    <p className=" font-poppins-medium text-light-green md:px-10 lg:w-[51%] text-center text-[17px] pb-12 z-10">When you're searching for a job, there are a few things you can do to get the most out of your search</p>
    <div className="text-[#8b8b8b] border-2 border-[#fd6214d6] rounded-sm px-2 bg-[#FFFFFF] flex items-center justify-between gap-5 max-sm:gap-0 mb-8 z-10 max-sm:w-3/4 overflow-clip max-sm:py-1 max-lg:py-2" >
     <div className="flex gap-2 items-center z-10">
     <div className="bg-red-500 p-2 rounded-lg max-sm:hidden">
     <img src={SEARCH} alt="searchIcon" width={20} height={20}/>
     </div>


    <input className=" font-poppins-medium lg:px-4 lg:py-5 border-none max-sm:w-[90%] lg:w-96 outline-none text-black text-md max-sm:text-sm " type="text" placeholder="Job title, keyword or company"  name="searchedWord" value={data.searchedWord}  onChange={change}/>

     </div>


    <button className=" flex gap-1 font-poppins-light bg-button-gray  max-sm:text-sm lg:text-[13px] max-sm:w-30 p-2  lg:px-2 lg:py-2 rounded-md text-black" onClick={submit}><span className="max-sm:hidden"><img src={locationIcon} alt="locationIcon" width={18}/></span>Any location</button>
    </div>

    <p style={{fontFamily:"poppins"}} className="text-white font-semibold pb-8 z-10"><span className="text-light-green font-semibold text-xl">21,701,403</span> Total Jobs Posted</p>
      </div>
    
    </section>
    
  )
}

export default Hero