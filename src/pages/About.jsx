import Faq from "../components/section/Faq"
import PageTitle from "../components/section/PageTitle"

const About = () => {
    return (
        <>
            <PageTitle
                data={
                    {
                        pageBeforeUrl: "/",
                        pageBeforeTitle: "Home",
                        currentPageTitle: "About",
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

export default About