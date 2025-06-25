import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

import { FreeMode, Pagination } from 'swiper/modules';


import { services } from "../../constant";

const Slider = () => {
    return (
        <div className='flex items-center justify-center flex-col '>
            <Swiper
                breakpoints={{
                    340: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    700: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                }}

                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className='w-[1140px]'
            >
                {services.map((items) => (
                    <SwiperSlide key={items.id}>
                        <div className='overflow-hidden flex flex-col gap-6 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[400px] w-[300px] cursor-crosshair'>
                            <div
                                className='absolute inset-0 bg-cover bg-center rounded-xl'
                                style={{ backgroundImage: `url(${items.imgPath})` }}
                            />
                            <div className='absolute inset-0 bg-blue opacity-10 group-hover:opacity-70 rounded-xl' />
                            <div className='relative flex flex-col items-center justify-end gap-1 pt-70 transition-all duration-300'>
                                <h1 className='text-2xl text-white font-bold transition-all duration-300 group-hover:-translate-y-2'>
                                    {items.title}
                                </h1>
                                <button className='text-green opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-crosshair'>
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>


                ))}
            </Swiper>
        </div>
    )
}

export default Slider