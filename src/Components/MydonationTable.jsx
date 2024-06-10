import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useDonation from "../hooks/useDonation";

const MydonationTable = ({ campaigId, amount, paymentid, refetchPayment }) => {
  const [campaignsData, refetch] = useDonation();
  const myCampaign = campaignsData.filter((data) => data._id === campaigId);
  const axiosSecure = useAxiosSecure();

  const handleRefound = async () => {
    const res = await axiosSecure.delete(`/payments/${paymentid}`);
    if (res.data.deletedCount > 0) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Refound Request Sent!",
        showConfirmButton: false,
        timer: 1500,
      });
      refetchPayment();
    }
  };
  return (
    <>
      {myCampaign.map((data) => (
        <tr key={data._id} className="text-center  border-b-2 py-5">
          <td className="pt-10">
            <img className="w-16 h-16 mx-auto" src={data.image} alt="" />
          </td>
          <td>{data.petName}</td>
          <td>${amount}</td>
          <td>
            <button
              onClick={handleRefound}
              className="btn bg-red-500 px-3 py-1 rounded-lg text-white"
            >
              Refund
            </button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default MydonationTable;
