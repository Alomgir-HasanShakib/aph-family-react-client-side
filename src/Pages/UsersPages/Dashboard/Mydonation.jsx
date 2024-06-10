import { useContext } from "react";
import DynamicTitle from "../../../Components/HelmetForTitle/DynamicTitle";
import useDonation from "../../../hooks/useDonation";
import usePayments from "../../../hooks/usePayments";
import { AuthContext } from "../../../Context/authcontext/Authentication";
import MydonationTable from "../../../Components/MydonationTable";

const Mydonation = () => {
  const [paymentData, refetchPayment] = usePayments();
  const { user } = useContext(AuthContext);

  const myPayments = paymentData.filter((data) => data.email === user?.email);
  return (
    <div>
      <DynamicTitle title="DashBoard | My Donation"></DynamicTitle>
      <div className="overflow-x-auto px-3">
        {!myPayments.length ? (
          <div className="flex justify-center items-center min-h-screen
           border">
            <h3 className="text-3xl font-bold text-blue-900 text-center">You Have No Data !</h3>
          </div>
        ) : (
          <table className="container mx-auto text-xs  md:text-base">
            <thead className="">
              <tr>
                <th>Image</th>
                <th>Pet Name</th>
                <th>Donated Amount</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="pt-10">
              {myPayments.map((payInfo) => (
                <MydonationTable
                  key={payInfo._id}
                  campaigId={payInfo.campaignID}
                  amount={payInfo.amount}
                  paymentid = {payInfo._id}
                  refetchPayment={refetchPayment}
                ></MydonationTable>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Mydonation;
