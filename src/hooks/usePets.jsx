import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../Context/authcontext/Authentication";

const usePets = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loader } = useContext(AuthContext);
  //   tanstack query code here
  const { refetch, data: pets = [] } = useQuery({
    queryKey: ["pet"],
    enabled: !loader,
    queryFn: async () => {
      const res = await axiosSecure.get(`/pets`);
      return res.data;
    },
  });
  return [pets, refetch];
};

export default usePets;
