import ProgressBar from "@ramonak/react-progress-bar";
// import useDonation from "../hooks/useDonation";
import usePayments from "../hooks/usePayments";

const ProgressingBar = ({ id, totalAmount }) => {
  const [paymentData] = usePayments();
  const specificPetPayment = paymentData.filter((pay) => pay.campaignID === id);
  const totalDonationAmount = specificPetPayment.reduce(
    (sum, pay) => sum + pay.amount,
    0
  );
  // const [campaignsData, refetch] = useDonation();
  // const mydonationCampaign = campaignsData.filter((data) => data._id === id);
  // const totalAmount = mydonationCampaign.filter((data) => data.totalAmount);
  // console.log(totalAmount);

  return (
    <ProgressBar
      completed={totalDonationAmount}
      maxCompleted={totalAmount}
      isLabelVisible={false}
    />
  );
};

export default ProgressingBar;
