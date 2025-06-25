import { pricing } from "../../constant"
import React, { useEffect, useRef } from "react";
import gsap from "gsap";


const Price = () => {
    const cardsRef = useRef([]);

    useEffect(() => {
        gsap.from(cardsRef.current, {
            opacity: 0,
            y: 50,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
        });
    }, []);
    return (
        <div className="w-[1140px] grid grid-cols-3 gap-6 py-5 " >
            {pricing.map((item, index) => (
                <div
                    key={item.id}
                    ref={(el) => (cardsRef.current[index] = el)}
                    className="bg-white rounded-xl shadow-md p-4 flex flex-col items-start text-start "
                >
                    <img src={item.imgPath} alt={item.title} className="h-[80px] mb-5" />
                    <h1 className="text-lg text-blue font-semibold mb-2 ">{item.title}</h1>
                    <p className="text-sm text-gray-500 font-spacial font-normal mb-3 w-[260px]">{item.desc}</p>
                    <span className="text-sm text-green-700 font-semibold">Price: {item.price}</span>

                </div>
            ))}
        </div>
    )
}

export default Price