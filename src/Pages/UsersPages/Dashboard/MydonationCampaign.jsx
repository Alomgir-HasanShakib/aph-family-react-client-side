import { Link } from "react-router-dom";
import DynamicTitle from "../../../Components/HelmetForTitle/DynamicTitle";
import { LuPauseOctagon } from "react-icons/lu";
import { FiEdit } from "react-icons/fi";
import { MdRemoveRedEye } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
  Progress,
} from "flowbite-react";
import useDonation from "../../../hooks/useDonation";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Context/authcontext/Authentication";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const MydonationCampaign = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [pauseStatus, setPauseStatus] = useState(true);
  const [campaignsData, refetch] = useDonation();
  const mydonationCampaign = campaignsData.filter(
    (data) => data.user === user?.email
  );
  console.log(pauseStatus);
  const handleIsPause = async (id) => {
    setPauseStatus(!pauseStatus);
    console.log("clicked");

    const isPause = {
      isPause: pauseStatus,
    };
    const pauseRes = await axiosSecure.put(`/campaigns/${id}`, isPause);
    if (pauseRes.data.modifiedCount > 0) {
      if(pauseStatus === true){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Donation Paused",
          showConfirmButton: false,
          timer: 1500,
        });
      }else{
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Donation Re Start",
          showConfirmButton: false,
          timer: 1500,
        });
      }
     
     
    }
    refetch();
  };

  return (
    <div>
      <DynamicTitle title="DashBoard | My Donation Campaign"></DynamicTitle>
      <div>
        <div className="overflow-x-auto">
          <Table hoverable>
            <TableHead>
              <TableHeadCell>Pet Name</TableHeadCell>
              <TableHeadCell>Max.Donation Amount</TableHeadCell>
              <TableHeadCell>Donation Progress Bar</TableHeadCell>
              <TableHeadCell>Action</TableHeadCell>
            </TableHead>
            <TableBody className="divide-y">
              {mydonationCampaign.map((data) => (
                <TableRow
                  key={data._id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {data.petName}
                  </TableCell>
                  <TableCell>${data.totalAmount}</TableCell>
                  <TableCell>
                    {" "}
                    <Progress progress={45} size="lg" />
                  </TableCell>
                  <TableCell>
                    <div className="flex md:flex-row flex-col gap-3 text-xl">
                      <button className="btn text-white px-3 py-2 rounded-full bg-blue-900">
                        <FiEdit />
                      </button>
                      <button
                        onClick={() => handleIsPause(data._id)}
                        className="btn text-white px-3 py-2 rounded-full bg-green-500"
                      >
                        {!data.isPause ? (
                          <LuPauseOctagon></LuPauseOctagon>
                        ) : (
                          <FaPlay></FaPlay>
                        )}
                      </button>
                      <button className="btn text-white px-3 py-2 rounded-full bg-blue-900">
                        <MdRemoveRedEye></MdRemoveRedEye>{" "}
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default MydonationCampaign;
