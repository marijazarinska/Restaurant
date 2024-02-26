import React from "react"; 
import HeroImg from "../../assets/food2.png";
import HeroBg from "../../assets/HeroBg.png";
import PrimaryButton from "../Shared/PrimaryButton";


const BgStyle = {
    backgroundImage : `url(${HeroBg})`,
    backgroundRepeat: "",
    bacgroundPosition : "center",
    width: "100%",
    height:"100%",
};

const Hero = () => {
    return (
        <>
        <div className="relative z-[-1] bg-gradient-to-r from-gray-200 to-gray-400">
            <div className="container py-16 sm:py-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]">
                    <div className="space-y-7 text-dark order-2 sm:order-1">
                        <h1 data-aos="fade-up" className="text-5xl">Fresh & Healthy Meal <br></br> <span className="text-amber-700 font-cursive text-7xl">Delivery</span> All Over City</h1>
                        <p data-aos="fade-up" className="lg:pr-64">Delicious Meals In Restaurant Or Delivered To Your Door</p>
                        <div data-aos="fade-up"
                        data-aos-delay="500" >
                            <PrimaryButton  />
                        </div>
                    </div>
                    {/*Image */}
                    <div
                    data-aos="zoom-in"
                    data-aos-delay="500"
                    className="relative z-30 order-1 sm:order-2">
                        <img src={HeroImg} alt=""
                        className="w-full h-[200px] sm:h-[300px]  md:h-[400px] lg:h-[500px] xl:h-[500px] sm:mt-[-70px] xl:mt-[50px] rounded-full overflow-hidden "
                        ></img>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Hero;