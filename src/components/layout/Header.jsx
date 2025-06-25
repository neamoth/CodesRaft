import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="relative w-full flex justify-center z-50 ">
            <div className="w-[1140px] flex justify-between items-center px-6 py-4 ">
                <div className="w-[30%]">
                    <Link to="/" className="text-2xl font-bold text-white">CodesRaft</Link>
                </div>
                <div className="w-[70%] flex justify-end items-center gap-4" >
                    <Navbar />
                    <Link
                        to="/"
                        className="ml-4 px-4 py-2 bg-green text-black rounded hover:bg-hover transition"
                    >
                        View Basket (3)
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header