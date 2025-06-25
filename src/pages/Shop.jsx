import Faq from "../components/section/Faq"
import Price from "../components/ui/Price"
import PageTitle from "../components/section/PageTitle"

const Shop = () => {
    return (
        <>
            <PageTitle
                data={
                    {
                        pageBeforeUrl: "/",
                        pageBeforeTitle: "Home",
                        currentPageTitle: "Shop",
                        imgPath: "/contactHeader.webp",
                        greeting: "Welcome to Our Services",
                        description: "Explore our wide range of services designed to meet your needs.",
                    }
                }
            />

            <section className="flex flex-col items-center justify-start py-10">

                <div className="w-[1140px] flex flex-col">
                    <div className="flex flex-col items-start justify-start gap-2 px-5">
                        <h1 className="text-3xl text-blue font-bold font-primany">Discover Our Price List</h1>
                        <p className="text-md text-gray-500 font-spacial">We Offer the cheapest price with valueable and quality services</p>
                    </div>
                    <Price />
                </div>
            </section>

            <Faq />
        </>
    )
}

export default Shop