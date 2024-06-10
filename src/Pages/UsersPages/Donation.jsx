import { Link } from "react-router-dom";
import DynamicTitle from "../../Components/HelmetForTitle/DynamicTitle";
import useDonation from "../../hooks/useDonation";

const Donation = () => {
  const [campaignsData] = useDonation();
  return (
    <div className="px-3">
      <DynamicTitle title="Donation"></DynamicTitle>
      <div className="bg-[#FCEED5] h-[500px] flex items-center justify-center mb-24">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-blue-900 text-center pb-5">
            Why Donate Here?
          </h2>
          <p className="text-sm md:text-xl font-semibold text-blue-950 text-center pt-5">
            You can be confident that your contribution to APH will go straight
            to work helping animals—by ending horrifying experiments, funding
            investigations to expose cruelty on massive farms, stopping animals
            from being abused and killed for their skin, rescuing dogs and cats
            from neglect, and much more.
          </p>
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {campaignsData.map((data) => (
          <div
            key={data._id}
            className="max-w-sm max-h-[500px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 
            "
          >
            <a href="#">
              <img className="rounded-t-lg w-full h-[250px]" src={data.image} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                 Name: {data.petName}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
               Max.Donation Amount:  ${data.totalAmount}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
               Last Date For Donation:  {data.lastDate}
              </p>
              <button
                href="#"
                className=" px-3 py-2 text-sm font-medium text-center text-white bg-blue-900 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex-grow"
              >
                <Link
                  to={`/donationDetails/${data._id}`}
                  className="
                inline-flex items-center"
                >
                 View Details
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Donation;
