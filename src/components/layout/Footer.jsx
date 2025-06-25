import { IoArrowForwardOutline } from "react-icons/io5";
import { footer } from "../../constant";
import { Link } from "react-router";

const Footer = () => {
    return (
        <footer className="flex items-center justify-center bg-blue py-5 min-h-[40vh]">

            <div className="w-[1140px] text-white">
                <div className="top flex items-center justify-between gap-20 py-5">
                    <div className="w-[50%]">
                        <h1 className="font-bold text-3xl pb-5">Free Monthly Newsletter</h1>
                        <p className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem voluptatum sequi obcaecati dolorum inventore!</p>
                    </div>
                    <div className="w-[50%]">
                        <form className="flex flex-col sm:flex-row items-center gap-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            <button
                                type="submit"
                                className="w-full sm:w-auto px-6 py-2 bg-green text-black font-medium rounded hover:bg-hover transition inline-flex items-center justify-center gap-2"
                            >   
                                Subscribe <IoArrowForwardOutline className="text-lg" />
                            </button>
                        </form>
                    </div>
                </div>
                <div>
                    <div className="sm:w-[1140px] w-full flex sm:flex-row flex-col items-start sm:gap-40 gap-5 sm:px-0 px-5 sm:py-10 py-5">
                        {/* left */}
                        <div className="flex flex-col gap-5 sm:w-[35%] w-full">
                            <h1 className="text-2xl text-white font-extrabold">{footer.logo}</h1>
                            <p className="font-spacial w-[450px] font-[400] text-[14px] text-gray-300">{footer.desc}</p>
                            <div className="flex gap-2.5 py-3">
                                {footer.social.map((item) => (
                                    <a key={item.platform} href={item.href}><img src={item.imgPath} alt={item.platform} /></a>
                                ))}
                            </div>
                        </div>
                        {/* right */}
                        <div className="sm:w-[65%] w-full flex md:flex-row flex-col items-start justify-between ">
                            {/* subdivs */}
                            {footer.nav.map((left, index) => (
                                <div key={index} >
                                    <h4 className="text-white font-spacial font-[600] text-[18px] pb-5">{left.title}</h4>
                                    {left.links.map((link, index) => (
                                        <div key={index} className="text-white font-spacial font-[400] text-[14px] pb-3">
                                            <Link
                                                to={link.href}
                                            >{link.label}</Link>
                                        </div>
                                    ))}
                                </div>
                            ))}
                            <div>
                                <h4 className="text-white font-spacial font-[600] text-[18px] pb-5">Contact</h4>
                                {footer.contact.map((item) => (
                                    <div key={item.label} className="flex items-center justify-start gap-2 pb-3">
                                        <img src={item.imgPath} alt={item.label} />
                                        <a href={`${item.type}${item.label}`} className="text-white font-spacial font-[400] text-[14px]">{item.label}</a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </footer>
    )
}

export default Footer