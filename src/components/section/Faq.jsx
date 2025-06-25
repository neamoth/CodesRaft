import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { faqData } from "../../constant";


const Faq = () => {
    const [activeFaq, setActiveFaq] = useState(null);
    const faqRefs = useRef([]);

    useEffect(() => {
        gsap.from(faqRefs.current, {
            opacity: 0,
            y: 40,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out",
        });
    }, []);

    const toggle = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    return (
        <section className="w-full py-10 px-6">
            <div className="max-w-[1140px] mx-auto min-h-[400px]">
                <h2 className="text-3xl text-blue font-bold text-center mb-10">Frequently Asked Questions</h2>
                <div className="grid gap-6 md:grid-cols-2">
                    {faqData.map((item, index) => (
                        <div
                            key={item.id}
                            ref={(el) => (faqRefs.current[index] = el)}
                            className="border border-gray-200 rounded-lg overflow-hidden"
                        >
                            <button
                                onClick={() => toggle(index)}
                                className="w-full flex justify-between items-center px-4 py-3 bg-green hover:bg-hover transition"
                            >
                                <span className="font-medium text-left">{item.question}</span>
                                <span className="text-xl">{activeFaq === index ? "-" : "+"}</span>
                            </button>
                            {activeFaq === index && (
                                <div className="px-4 py-3 text-gray-700 bg-white transition">
                                    {item.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;
