import { LuPauseOctagon } from "react-icons/lu";
import { FiEdit } from "react-icons/fi";
// import { MdRemoveRedEye } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
// import ProgressBar from "@ramonak/react-progress-bar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import useDonation from "../../hooks/useDonation";
import { useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Showdonator from "../../Components/Showdonator";
import ProgressingBar from "../../Components/ProgressingBar";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa6";

const AllDonators = () => {
  const [pauseStatus, setPauseStatus] = useState(true);
  const [campaignsData, refetch] = useDonation();
  const axiosSecure = useAxiosSecure();

  //   handle pause status here
  const handleIsPause = async (id) => {
    setPauseStatus(!pauseStatus);
    console.log("clicked");

    const isPause = {
      isPause: pauseStatus,
    };
    const pauseRes = await axiosSecure.patch(`/campaigns/${id}`, isPause);
    if (pauseRes.data.modifiedCount > 0) {
      if (pauseStatus === true) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Donation Paused",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
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

  //     handle campaign here
  const handleDeleteCampaign = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const deleteRes = await axiosSecure.delete(`/campaigns/${id}`);
        if (deleteRes.data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Your Campaign has been deleted.",
            icon: "success",
          });
          refetch();
        }
      }
    });
  };

  return (
    <div className="overflow-x-auto">
      <Table hoverable>
        <TableHead>
          <TableHeadCell>Pet Name</TableHeadCell>
          <TableHeadCell>Max.Donation Amount</TableHeadCell>
          <TableHeadCell>Donation Progress Bar</TableHeadCell>
          <TableHeadCell>Action</TableHeadCell>
          <TableHeadCell>
            <span className="sr-only">Edit</span>
          </TableHeadCell>
        </TableHead>
        <TableBody className="divide-y">
          {campaignsData.map((data) => (
            <TableRow
              key={data._id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {data.petName}
              </TableCell>
              <TableCell>${data.totalAmount}</TableCell>
              <TableCell>
                <ProgressingBar
                  id={data._id}
                  totalAmount={data.totalAmount}
                ></ProgressingBar>
              </TableCell>
              <TableCell>
                <div className="flex md:flex-row flex-col gap-3 text-xl">
                  <Link
                    to={`/dashboard/updateCampaign/${data._id}`}
                    className="btn text-white px-3 py-2 rounded-full bg-blue-900"
                  >
                    <FiEdit />
                  </Link>
                  <button
                    onClick={() => handleDeleteCampaign(data._id)}
                    className="bg-red-600 btn text-white px-3 py-2 rounded-full"
                  >
                    <FaTrash className="text-xl"></FaTrash>
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
                  <Showdonator id={data._id}></Showdonator>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AllDonators;
