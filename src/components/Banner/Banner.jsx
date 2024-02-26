import React from "react";
import Coffee from '../../assets/png/coffee.png';
import Drink from '../../assets/png/drink.png';
import Lime from '../../assets/png/lime.png';
import Straw from '../../assets/png/straw.png';
import Sweet from '../../assets/png/sweet.png';
import Tomato from '../../assets/png/tomato.png';
import PrimaryButton from "../Shared/PrimaryButton";


const Banner = () => {
    return (
        <>
        <div className="container py-14 relative">
            <div className="relative z-20">
                <h1
                data-aos="fade-up"
                data-aoss-delay="300"
                className="py-8 tracking-wider text-2xl font-semibold text-dark text-center">
                Food is not just fuel, it's an experience
                </h1>
                <div data-aos="fade-up" data-aos-delay="500" className="space-y-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">
                        <div className="text-justify mt-10">
                            <p>Cooking is an <span className="text-amber-700 text-xl font-mono"> art </span>, and every meal is a masterpiece
                                 waiting to be savored. With each dish, we blend passion,
                                  creativity, and flavor to create unforgettable experiences
                                   for your palate. Welcome to a world where every bite tells 
                                   a story, and every meal is a journey of taste and delight.</p>
                        </div>
                        <div></div>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="500" className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">
                        <div></div>
                        <div className="text-justify">
                            <p>Food is not just sustenance, it's a <span className="text-amber-700 text-xl font-mono">celebration of life</span>,
                                a symphony of flavors that dances on your tongue.
                                From the sizzle of the pan to the aroma that fills the air,
                                each meal is an invitation to indulge in the simple pleasures 
                                of existence. Let every bite be a reminder of the richness of our world
                                 and the joy found in sharing a table with loved ones.</p>
                        </div>
                    </div>
                </div>
                <div
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-offset = "0"
                className="flex justify-center mt-10 sm:mt-14">
                    <PrimaryButton />
                </div>
            </div>
            <div 
            data-aos="fade-right"
            className="absolute top-5 -left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100">
                <img  data-aos="fade-right" src={Straw} alt="" className="max-w-[160px]"></img>
            </div>
            <div  data-aos="fade-right" className="absolute -bottom-16 -left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100">
                <img  data-aos="fade-right" src={Tomato} alt="" className="max-w-[200px]"></img>
            </div>
            <div  data-aos="fade-left" className="absolute top-10 -right-16 sm:right-20 opacity-50 sm:opacity-100">
                <img data-aos="fade-left" src={Sweet} alt="" className="max-w-[200px]"></img>
            </div>
            <div data-aos="fade-left" className="hidden sm:block absolute bottom-0 right-0">
                <img data-aos="fade-left" src={Drink} alt="" className="max-w-[250px]"></img>
            </div>
            <div data-aos="fade" className="absolute top-1/2 -translate-y-1/2 left-1/3 -translate-x-1/2 opacity-50 sm:opacity-100">
                <img data-aos="fade" src={Lime} alt="" className="max-w-[180px]"/>
            </div>
        </div>
        </>
    )
}

export default Banner;