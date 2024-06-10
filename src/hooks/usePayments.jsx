import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const usePayments = () => {
      const axiosSecure = useAxiosSecure();
      //   tanstack query code here
      const { refetch:refetchPayment, data: paymentData = [] } = useQuery({
        queryKey: ["payments"],
        queryFn: async () => {
          const res = await axiosSecure.get(`/payments`);
          return res.data;
        },
      });
      return [paymentData, refetchPayment];
}

export default usePayments