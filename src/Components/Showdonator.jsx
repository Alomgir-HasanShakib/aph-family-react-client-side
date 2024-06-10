import React, { useState } from "react";
import { MdRemoveRedEye } from "react-icons/md";
import usePayments from "../hooks/usePayments";
import { Button, Modal } from "flowbite-react";

const Showdonator = ({ id }) => {
  const [paymentData] = usePayments();
  const [donators, setDonators] = useState([]);
  const [totalDonation, settotalDonation] = useState();
  const [openModal, setOpenModal] = useState(false);

  const specificPetPayment = paymentData.filter((pay) => pay.campaignID === id);

  return (
    <>
      <Button
        onClick={() => setOpenModal(true)}
        className="px-2  bg-blue-900 rounded-full text-white"
      >
        <MdRemoveRedEye></MdRemoveRedEye>{" "}
      </Button>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Donator For This Pet</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            {
              specificPetPayment.map(pay=> <p key={pay._id} className="text-base leading-relaxed text-gray-500 dark:text-gray-400 capitalize">
               {pay.userName}
              </p>)
            }
           
            
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Showdonator;
