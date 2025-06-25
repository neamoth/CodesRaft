import { Link } from "react-router"

const PageTitle = ({ data }) => {
    return (
        <section className="relative h-[400px] flex flex-col items-center justify-center mt-[-72px]">
            <div className="absolute inset-0 bg-cover bg-center h-[400px]" style={{ backgroundImage: `url(${data.imgPath})` }} />
            <div className="absolute inset-0 bg-blue opacity-70" />
            <div className="relative mt-[72px] w-[1140px] flex flex-col items-start justify-start ">
                <div className="flex flex-col items-start justify-start gap-4 mb-4">
                    <h1 className="text-5xl text-green font-semibold ">{data.greeting}</h1>
                    <p className="text-md text-gray-300 font-primany">{data.description}</p>
                </div>
                <span className="text-white font-spacial text-lg">
                    <Link
                        to={data.pageBeforeUrl}

                    >
                        {data.pageBeforeTitle}
                    </Link>
                    / <span className="font-bold">
                        {data.currentPageTitle}
                    </span>
                </span>
            </div>
        </section>
    )
}

export default PageTitle