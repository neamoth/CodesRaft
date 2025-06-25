import Faq from "../components/section/Faq"
import PageTitle from "../components/section/PageTitle"

const Services = () => {
    return (
        <>
            <PageTitle
                data={
                    {
                        pageBeforeUrl: "/",
                        pageBeforeTitle: "Home",
                        currentPageTitle: "Services",
                        imgPath: "/contactHeader.webp",
                        greeting: "Welcome to Our Services",
                        description: "Explore our wide range of services designed to meet your needs.",
                    }
                }
            />

            <Faq />
        </>
    )
}

export default Services