import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer data-aos="fade-down" className="w-full mt-40 bg-gray-200 rounded-t-full p-6 text-center">
      <h2 className="text-2xl mt-10 font-mono uppercase font-bold mb-10 text-amber-700">Contact us</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
        <div className="flex items-center flex-col md:flex-row">
          <FaMapMarkerAlt className="text-2xl mr-2 md:mr-4 text-amber-700" />
          <p className="text-sm">123 Street Name, City, Country</p>
        </div>
        <div className="flex items-center flex-col md:flex-row">
          <FaEnvelope className="text-2xl mr-2 md:mr-4 text-amber-700" />
          <p className="text-sm">example@example.com</p>
        </div>
        <div className="flex items-center flex-col md:flex-row">
          <FaPhone className="text-2xl mr-2 md:mr-4 text-amber-700" />
          <p className="text-sm">+123 456 7890</p>
        </div>
      </div>
      <p className="mt-20 text-gray-600">© 2024 Your Restaurant. All rights reserved.</p>
      <div className="flex justify-center mt-4">
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-gray-600 hover:text-amber-900 transition duration-300">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-amber-900 transition duration-300">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-amber-900 transition duration-300">
              Cookie Policy
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
