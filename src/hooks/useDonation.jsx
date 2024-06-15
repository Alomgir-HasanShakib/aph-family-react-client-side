import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../Context/authcontext/Authentication";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useDonation = () => {
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const { user, loader } = useContext(AuthContext);
  //   tanstack query code here
  const { refetch, data: campaignsData = [] } = useQuery({
    queryKey: ["campaign"],
    enabled: !loader,
    queryFn: async () => {
      const res = await axiosPublic.get(`/campaigns`);
      return res.data;
    },
  });
  return [campaignsData, refetch];
};

export default useDonation;
