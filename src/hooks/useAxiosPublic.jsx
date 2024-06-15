import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://aphfamily-alomgir-hasanshakibs-projects.vercel.app",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
