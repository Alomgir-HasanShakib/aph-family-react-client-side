import moment from "moment";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const PetCard = ({ pet }) => {
  
  const { name, age, image, locaiton, date, _id } = pet;
  const utcDate = moment(date).utc().format("YYYY-MM-DD HH:mm");



  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800" data-aos="fade-up" data-aos-duration="1000">
      <img className="w-full h-80" src={image} alt="Article" />

      <div className="p-6">
        <div>
          <a
            href="#"
            className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
            tabIndex="0"
            role="link"
          >
            Name: {name}
          </a>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Location: {locaiton}
          </p>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Age: {age}
          </p>
        </div>

        <div className="mt-4">
          <div className="flex items-center">
            <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">
              {utcDate}
            </span>
          </div>
          <Link to={`/petdetails/${_id}`}>
            <button className="btn border border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-bold rounded-full px-4 py-1 mt-5 flex items-center gap-2">
              View Details <MdKeyboardDoubleArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PetCard;
