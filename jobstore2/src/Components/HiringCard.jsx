import { Link } from "react-router-dom";

Link

const HiringCard = ({icon, heading, subHeading})=>{
    return(
        <section className=" border border-slight-gray px-7 py-6 rounded-lg flex flex-col gap-5 relative">
            <span>
                <img src={icon} alt="Icon" />
            </span>

            <div>
                <h1 className="font-poppins-semibold text-2xl pb-3">{heading}</h1>
                <h1 className="font-poppins-medium text-slate-gray text-sm">{subHeading}</h1>
            </div>

            <Link>Learn More</Link>
        </section>
    )
}

export default HiringCard;