import { Link } from "react-router"
import { cta } from "../../constant"

const Cta = () => {
    return (
        <div className="w-[1140px] flex items-center justify-center gap-10">
            <div>
                <img src={cta.img} alt={cta.title} className="h-[300px] rounded-xl" />
            </div>
            <div className="flex flex-col items-start justify-center gap-4 w-[400px]">
                <h2 className="text-green text-lg font-semibold" >{cta.subtitle}</h2>
                <h1 className="text-blue text-3xl font-bold">{cta.title}</h1>
                <p className="text-gray-600 text-sm font-normal">{cta.desc1}</p>
                <p className="text-gray-600 text-sm font-normal">{cta.desc2}</p>
                <Link
                    to={cta.link}
                    className="px-4 py-2 bg-green text-black rounded hover:bg-hover transition"
                >
                    Contact Now
                </Link>
            </div>
        </div>
    )
}

export default Cta