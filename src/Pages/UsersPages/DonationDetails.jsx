import { useLoaderData, useParams } from "react-router-dom";
import DynamicTitle from "../../Components/HelmetForTitle/DynamicTitle";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import CheckOut from "./CheckOut";
import { Elements } from "@stripe/react-stripe-js";

const DonationDetails = () => {
  const { id } = useParams();
  const donationData = useLoaderData();

  const {
    _id,
    user,
    totalAmount,
    shortDescription,
    petName,
    longDescription,
    lastDate,
    campaignStart,
    image,
    isPause,
  } = donationData;
  console.log('donted====================',donationData);
  const [openModal, setOpenModal] = useState(false);
  const [amount, setAmount] = useState(null);
  const price = parseInt(amount);

  // Make sure to call `loadStripe` outside of a component’s render to avoid
  // recreating the `Stripe` object on every render.
  const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);


  return (
    <div>
      <DynamicTitle title="Donation Details"></DynamicTitle>
      <div className="bg-[#FCEED5] h-[300px] flex items-center justify-center mb-24">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-blue-900 text-center pb-5">
            Donate Now!
          </h2>
        </div>
      </div>
      <div className="container mx-auto px-3">
        <div
          className="max-w-4xl text-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 
            "
        >
          <img className="rounded-t-lg w-full h-[550px]" src={image} alt="" />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Name: {petName}
            </h5>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Max.Donation Amount: ${totalAmount}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Last Date For Donation: {lastDate}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Starting date: {lastDate}
            </p>
            <div className="grid items-center justify-center mt-8">
              {isPause ? (
                <h4 className="text-2xl font-medium text-red-700 capitalize border border-red-700 px-4 py-2 rounded-lg">
                  This campaign is currently closed
                </h4>
              ) : (
                <>
                  <Button
                    className="bg-blue-900 px-5"
                    onClick={() => setOpenModal(true)}
                  >
                    Donate
                  </Button>
                  <Modal
                    dismissible
                    show={openModal}
                    onClose={() => setOpenModal(false)}
                  >
                    <Modal.Header>Please Donate less Then ${totalAmount}</Modal.Header>
                    <Modal.Body>
                      <div className="space-y-6">
                        <form onChange={(e) => setAmount(e.target.value)}>
                          <div className="mt-4">
                            <label
                              className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                              htmlFor="donateAmount"
                            >
                              Donate Amount
                            </label>
                            <input
                              id="donateAmount"
                              name="amount"
                              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                              type="number"
                            />
                          </div>
                        </form>
                        <Elements stripe={stripePromise}>
                          <CheckOut amount={price} totalAmount={totalAmount} id={_id}/>
                        </Elements>
                      </div>
                    </Modal.Body>
                  </Modal>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationDetails;
