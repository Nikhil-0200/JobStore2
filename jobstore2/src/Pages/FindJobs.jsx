import { Hero, CompaniesLogoSlider, FeaturedJobs, FeaturedCompanies, CustomerReviews, ManageHiring, Footer } from "../Sections/FindJobSection/index"


const Home = () => {
  return (
    <section className="max-container">
        <section className="padding-b wide:padding-r bg-[#12141D]">
          <Hero />
        </section>
        <section className="padding border-2 border-solid border-black">
          <CompaniesLogoSlider />
        </section>
        <section className="padding border-2 border-solid border-black">
          <FeaturedJobs />
        </section>
        <section className="padding_sep border-2 border-solid border-black">
          <FeaturedCompanies />
        </section>
        <section className="padding border-2 border-solid border-black">
          <CustomerReviews />
        </section>
        <section className="padding_sep border-2 border-solid border-black">
          <ManageHiring />
        </section>
        <section className="padding-x padding-t border-2 border-solid border-black">
          <Footer />
        </section>
    </section>
  )
}

export default Home