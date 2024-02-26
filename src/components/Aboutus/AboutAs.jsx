import { FaUtensils } from 'react-icons/fa';
import About from '../../assets/about.jpg'
import { FaUser } from 'react-icons/fa';

const AboutUsSection = ({HandlePopup}) => {
  return (
    <section className="mt-40 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 py-16">
      <div className="container mt-10 mx-auto">
        <div className="flex items-center justify-center flex-col mb-8">
          <h2 className="text-5xl font-semibold font-cursive text-gray-800 uppercase">About Us</h2>
          <hr className="border-t-2 border-amber-700 w-20 mt-2 mb-4" />
          <p className="text-dark uppercase font-bold text-xl font-mono">Our story - from start</p>
        </div>
        <div className="flex flex-wrap md:flex-nowrap justify-between">
          <div className="w-full mt-20 md:w-3/4 lg:w-2/3 pr-4 mb-8 md:mb-0 text-center md:text-left">
            <p className="text-gray-600">
              Welcome to <span className='text-amber-700 uppercase'>foodhouse</span>, where passion for food meets exceptional service.
              Our journey began with a simple idea: to create a dining experience like no other.
              With our dedication to quality ingredients and innovative recipes,
              we strive to delight every palate and create lasting memories for our guests.
              Join us on a culinary adventure and discover why we are more than just a restaurant -
              we are a destination for food lovers everywhere.
            </p>
            <button className="flex just-center items-center mt-20 gap-2 bg-amber-700 text-l g-[40px] text-white px-5 py-2 hover:scale-105 duration-300"
            onClick={HandlePopup} >
              <FaUser />
              My Account
            </button>
          </div>
          <div className="w-full md:w-1/4 lg:w-1/3">
            <img src={About} alt="Image" className="w-full h-auto rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
