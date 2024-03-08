import { useState } from "react"
import HiringCard from "../../Components/HiringCard"
import { HiringCampaign } from "../../Constants"

const ManageHiring = () => {
  return (
    <section className="max-container">
      <div className="flex justify-center flex-col gap-9 w-full m-auto items-center">
        <h1 className="font-poppins-extrabold text-3.5xl pb-2">Manage your hiring campaign</h1>

        <div className="flex gap-8">
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