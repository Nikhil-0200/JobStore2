import { Hero, CompaniesLogoSlider, FeaturedJobs, CustomerReviews, ManageHiring } from "../Sections/FindJobSection/index"

import Footer from "../Components/Footer"

const Home = () => {
  return (
    <section className="max-container">
        <section className="padding-b wide:padding-r bg-[#12141D]">
          <Hero />
        </section>
        <section className="padding">
          <CompaniesLogoSlider />
        </section>
        <section className="padding bg-light-white">
          <FeaturedJobs />
        </section>
        <section className="py-8 border-2 border-solid border-black bg-hero-black">
          <CustomerReviews />
        </section>
        <section className="padding ">
          <ManageHiring />
        </section>
        <section className="padding-x padding-t bg-hero-black">
          <Footer />  
        </section>
    </section>
  )
}

export default Home