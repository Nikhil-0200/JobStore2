
import HiringCard from "../../Components/HiringCard"
import { HiringCampaign } from "../../Constants"

const ManageHiring = () => {
  return (
    <section className="max-container">
      <div className="flex justify-center flex-col gap-9 w-full m-auto items-center">
        <h1 className="font-poppins-extrabold text-3xl xl:text-3.5xl pb-2 text-center xl:text-left ">Manage your hiring campaign</h1>

        <div className="flex gap-8 max-xl:flex-col">
          {HiringCampaign.map((ele, index)=>(
            <HiringCard
            {...ele}
            key={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ManageHiring