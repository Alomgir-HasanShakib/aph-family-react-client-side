import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../Context/authcontext/Authentication";

const useDonation = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loader } = useContext(AuthContext);
  //   tanstack query code here
  const { refetch, data: campaignsData = [] } = useQuery({
    queryKey: ["campaign"],
    enabled: !loader,
    queryFn: async () => {
      const res = await axiosSecure.get(`/campaigns`);
      return res.data;
    },
  });
  return [campaignsData, refetch];
};

export default useDonation;
