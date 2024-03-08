import Button from "./Button";

const CompanyCard = ({companyLogo, companyName, })=>{
    return(
        <section>
            <div>
                <img src={companyLogo} alt="" />
            </div>

            <div>
                <h1>{companyName}</h1>
            </div>

            <div>
            <Button
          label="View Jobs"
          backgroundColor="bg-sky-blue"
          textColor="text-blue"
          textSize="text-sm"
        />
            </div>
        </section>
    )
}

export default CompanyCard;