import { Link } from "react-router"
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import Slider from "../components/ui/Slider";
import Price from "../components/ui/Price";
import Cta from "../components/ui/Cta";
import Faq from "../components/section/Faq";


const Home = () => {
    return (
        <>
            <section className="hero-container relative mt-[-75px]">

                <div className="absolute inset-0 bg-blue opacity-90 z-0"></div>

                <div className="relative w-full flex items-center justify-center z-10">
                    <div className="w-[1140px] mt-[75px] flex flex-row items-center justify-between">
                        <div className=" w-[50%] ">
                            <div className="w-[500px] flex flex-col items-start justify-center gap-10 text-start text-white py-20">
                                <h1 className="text-5xl ">Fix Your Mobile With CodesRaft</h1>
                                <h6>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate reiciendis maxime voluptas perspiciatis, odit, odio obcaecati repellendus nesciunt corporis sint sequi impedit minus voluptatem qui, assumenda delectus vitae praesentium distinctio.</h6>
                                <Link
                                    to="/"
                                    className="px-8 py-2 bg-green text-black rounded hover:bg-hover transition"
                                >
                                    <span className="inline-flex items-center gap-2     text-lg">
                                        Find my Device <IoArrowForwardCircleOutline className="text-xl" />
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <div className="w-[50%] flex items-center justify-center">
                            <img src="mobile.png" alt="Broken Mobile " />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold font-spacial text-blue py-3">Our Services</h1>
                <p className="text-md text-gray-500 font-primary pb-5">We Make Mobile Device Repair Stree Free</p>
                <Slider />
            </section>

            <section className="flex flex-col items-center justify-start ">

                <div className="w-[1140px] flex flex-col">
                    <div className="flex flex-col items-start justify-start gap-2 px-5">
                        <h1 className="text-3xl text-blue font-bold font-primany">Discover Our Price List</h1>
                        <p className="text-md text-gray-500 font-spacial">We Offer the cheapest price with valueable and quality services</p>
                    </div>
                    <Price />
                </div>
            </section>

            <section className="flex flex-col items-center justify-center py-10 bg-cover bg-center min-h-[70dvh]" style={{ backgroundImage: `url('ctaBg.webp')` }}>
                <Cta />
            </section>
            <Faq />
        </>
    )
}

export default Home