import React from "react";
import { useState } from "react";
import { FaUtensils, FaTruck, FaStar } from 'react-icons/fa';

const Advantages = () => {
    const [hoveredIcon, setHoveredIcon] = useState(null);
    return (
            <section className="bg-gray-200 mt-20 py-16">
              <div className="container mx-auto text-center">
                <h2 className="text-amber-700 font-cursive text-5xl md:text-7xl mb-20">Why to choose our restaurant?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* first */}
                  <div className="flex items-center space-x-4 my-4 mx-2 md:mx-0"
                  onMouseEnter={() => setHoveredIcon("utensils")}
                  onMouseLeave={() => setHoveredIcon(null)}>
                    <div data-aos="fade" className={`p-4 bg-white rounded-full shadow-lg ${hoveredIcon === "utensils" ? 'transform scale-110' : ''}`}>
                      <FaUtensils data-aos="fade" className="text-4xl text-amber-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Exceptional Cuisine</h3>
                      <p className="text-gray-600">Our chef prepares the most delicious dishes using the highest quality ingredients.</p>
                    </div>
                  </div>
        
                  {/* Second */}
                  <div className="flex items-center space-x-4 my-4 mx-2 md:mx-0"
                  onMouseEnter={() => setHoveredIcon("truck")}
                  onMouseLeave={() => setHoveredIcon(null)}>
                    <div data-aos="fade" className={`p-4 bg-white rounded-full shadow-lg ${hoveredIcon === "truck" ? 'transform scale-110' : ''}`}>
                      <FaTruck data-aos="fade" className="text-4xl text-amber-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Fast Delivery</h3>
                      <p className="text-gray-600">Our delivery vehicles guarantee fast and timely delivery of your delicious food to your doorstep.</p>
                    </div>
                  </div>
        
                  {/* Third */}
                  <div  className="flex items-center space-x-4 my-4 mx-2 md:mx-0"
                  onMouseEnter={() => setHoveredIcon("star")}
                  onMouseLeave={() => setHoveredIcon(null)}>
                    <div data-aos="fade" className={`p-4 bg-white rounded-full shadow-lg ${hoveredIcon === "star" ? 'transform scale-110' : ''}`}>
                      <FaStar data-aos="fade" className="text-4xl text-amber-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Outstanding Service</h3>
                      <p className="text-gray-600">Our goal is to provide you with consistently exceptional and pleasant food and service experiences.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
    )
}

export default Advantages;